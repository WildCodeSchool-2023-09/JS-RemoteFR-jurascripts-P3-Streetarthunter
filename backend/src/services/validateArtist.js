const Joi = require("joi");

// Joi schema for validating artist data
const artistSchema = Joi.object({
  name: Joi.string().max(255).required(),
  bio: Joi.string().max(255),
  portrait: Joi.string().max(255).required(),
});

// Middleware for validating artist data before creating or updating
const validateArtist = (req, res, next) => {
  const artistData = req.body;

  // Validate the artist data against the Joi schema
  const { error } = artistSchema.validate(artistData);

  if (error) {
    // If validation fails, respond with a 400 Bad Request and the validation error details
    res.status(400).json({ error: error.details.map((err) => err.message) });
  } else {
    // If validation passes, proceed to the next middleware or route handler
    next();
  }
};

module.exports = {
  validateArtist,
};
