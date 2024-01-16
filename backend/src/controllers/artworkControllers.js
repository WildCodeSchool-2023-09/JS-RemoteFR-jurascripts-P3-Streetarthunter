// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const artworks = await tables.artworks.readAll();

    // Respond with the items in JSON format
    res.json(artworks);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const artwork = await tables.artworks.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (!artwork) {
      res.sendStatus(404);
    } else {
      res.json(artwork);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the updated item data from the request body
  const updatedArtwork = req.body;

  try {
    // Update the item in the database based on the provided ID
    const success = await tables.artworks.update(req.params.id, updatedArtwork);

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
  const artwork = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.artworks.create(artwork);

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
    // Delete the item from the database based on the provided ID
    const success = await tables.artworks.delete(req.params.id);

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

// New function to get artworks by location_id
const getArtworksByLocationId = async (req, res, next) => {
  const locationId = req.query.location_id;

  try {
    if (!locationId) {
      res.status(400).json({ error: "Location ID is required." });
      return;
    }

    const artworks = await tables.artworks.getArtworksByLocationId(locationId);

    res.json(artworks);
  } catch (err) {
    next(err);
  }
};

// New function to get all artworks
const getArtworks = async (req, res, next) => {
  const locationId = req.query.location_id;

  if (locationId) {
    // Si location_id est fourni, utiliser la fonction pour filtrer
    return getArtworksByLocationId(req, res, next);
  }
  // Sinon, obtenir toutes les œuvres d'art en utilisant la fonction browse existante
  return browse(req, res, next);
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getArtworks,
  getArtworksByLocationId,
};
