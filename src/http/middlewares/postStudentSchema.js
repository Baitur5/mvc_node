const Joi = require('joi');

const studentSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().integer().min(16).max(100).required(),
  gpa: Joi.number().min(0).max(4).required(),
});



module.exports = { studentSchema };
