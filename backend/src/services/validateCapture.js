const Joi = require("joi");

const captureSchema = Joi.object({
  user_id: Joi.number().integer().required(),
  artwork_id: Joi.number().integer().required(),
  capture: Joi.string().max(255).required(),
});

const validateCapture = (req, res, next) => {
  const captureData = req.body;

  const { error } = captureSchema.validate(captureData);

  if (error) {
    res.status(400).json({ error: error.details.map((err) => err.message) });
  } else {
    next();
  }
};

module.exports = {
  validateCapture,
};
