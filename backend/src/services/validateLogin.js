const Joi = require("joi");

const checkDatas = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().max(255).required(),
  }).validate(req.body, { abortEarly: false });

  if (error) {
    res.status(400).json(error);
  } else {
    next();
  }
};

module.exports = {
  checkDatas,
};
