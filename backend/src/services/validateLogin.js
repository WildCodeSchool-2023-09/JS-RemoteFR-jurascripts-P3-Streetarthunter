const Joi = require("joi");

const checkDatas = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().max(255).required(),
    password: Joi.string().max(255).required(),
  }).validate(req.body);

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  checkDatas,
};
