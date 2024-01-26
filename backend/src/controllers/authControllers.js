const { hash, verify, argon2id } = require("argon2");
const jwt = require("jsonwebtoken");
// Import access to database tables
const tables = require("../tables");

const add = (req, res) => {
  // First we extract the password from the body
  const { password } = req.body;

  // We create our hashing options
  const hashingOptions = {
    type: argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1,
  };

  hash(password, hashingOptions).then((hashedPassword) => {
    // We extract all the information from body, put it in a user variable
    // and replace password with hashed password
    const user = { ...req.body, hashedPassword };

    tables.users
      .insert(user)
      .then(([rows]) => {
        if (rows.affectedRows === 1) {
          return res.status(201).json({ success: "User saved!" });
        }
        return res.status(403).json({ error: "An error has occured!" });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });
};

const login = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.users.readByEmailWithPassword(req.body.email);

    if (user == null) {
      res.sendStatus(422);
      return;
    }
    const verified = await verify(user.hashed_password, req.body.password);

    if (verified) {
      // Respond with the user in JSON format (but without the hashed password)
      delete user.hashed_password;
      const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Send the token in the response
      res.status(200).json({ token });

      // .cookie("user token", token, {
      // httpOnly: true,
      // });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  add,
  login,
};
