const Joi = require("joi");

// Joi schema for validating artwork data
const artworkSchema = Joi.object({
  title: Joi.string().max(255).required(),
  picture: Joi.string().max(255).required(),
  description: Joi.string().max(255).required(),
  artist_id: Joi.number().integer().required(),
  user_id: Joi.number().integer().required(),
  general_gallery: Joi.boolean().required(),
  reported: Joi.boolean().required(),
  location_id: Joi.number().integer().required(),
});

// Middleware for validating artwork data before creating or updating
const validateArtwork = (req, res, next) => {
  const artworkData = req.body;

  // Validate the artwork data against the Joi schema
  const { error } = artworkSchema.validate(artworkData);

  if (error) {
    // If validation fails, respond with a 400 Bad Request and the validation error details
    res.status(400).json({ error: error.details.map((err) => err.message) });
  } else {
    // If validation passes, proceed to the next middleware or route handler
    next();
  }
};

module.exports = {
  validateArtwork,
};
