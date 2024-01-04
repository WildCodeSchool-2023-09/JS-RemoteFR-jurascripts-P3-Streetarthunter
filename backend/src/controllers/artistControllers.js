// Import access to the database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the artists table in the database
    const artists = await tables.artists.readAll();

    // Respond with the items in JSON format
    res.json(artists);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the artists table based on the provided ID
    const artist = await tables.artists.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (artist == null) {
      res.sendStatus(404);
    } else {
      res.json(artist);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the updated item data from the request body
  const updatedArtist = req.body;

  try {
    // Update the item in the artists table based on the provided ID
    const success = await tables.artists.update(req.params.id, updatedArtist);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // If the update is successful, respond with HTTP 204 (No Content)
    if (!success) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const artist = req.body;

  try {
    // Insert the item into the artists table in the database
    const insertId = await tables.artists.create(artist);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Delete the item from the artists table based on the provided ID
    const success = await tables.artists.delete(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // If the deletion is successful, respond with HTTP 204 (No Content)
    if (!success) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
