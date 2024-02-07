/* eslint-disable camelcase */
const Joi = require("joi");

const userSchema = Joi.object({
  firstname: Joi.string().max(80).required(),
  lastname: Joi.string().max(80).required(),
  pseudo: Joi.string().max(80).required(),
  email: Joi.string().email().max(255).required(),
  hashed_password: Joi.string().max(255).required(),
  avatar: Joi.string().max(255).required(),
  bio: Joi.string().max(255).required(),
  ranking: Joi.number().integer().required(),
  points: Joi.number().integer().required(),
  is_administrator: Joi.boolean().required(),
});

const validateUser = (req, res, next) => {
  const {
    firstname,
    lastname,
    pseudo,
    email,
    hashed_password,
    avatar,
    bio,
    ranking,
    points,
    is_administrator,
  } = req.body;

  const { error } = userSchema.validate({
    firstname,
    lastname,
    pseudo,
    email,
    hashed_password,
    avatar,
    bio,
    ranking,
    points,
    is_administrator,
  });

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = { validateUser };
