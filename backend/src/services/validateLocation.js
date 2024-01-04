const Joi = require("joi");

// Joi schema for validating artwork data
const locationSchema = Joi.object({
  city: Joi.string().max(255).required(),
  country: Joi.string().max(255).required(),
  post_code: Joi.number().integer().required(),
  street: Joi.string().max(255).required(),
  street_number: Joi.number().integer().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

// Middleware for validating artwork data before creating or updating
const validateLocation = (req, res, next) => {
  const locationData = req.body;

  // Validate the artwork data against the Joi schema
  const { error } = locationSchema.validate(locationData);

  if (error) {
    // If validation fails, respond with a 400 Bad Request and the validation error details
    res.status(400).json({ error: error.details.map((err) => err.message) });
  } else {
    // If validation passes, proceed to the next middleware or route handler
    next();
  }
};

module.exports = { validateLocation };
