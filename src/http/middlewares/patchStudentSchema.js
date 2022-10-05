
const bodyparser = require("koa-bodyparser")
const Joi = require('joi');

const studentSchema = Joi.object().keys({
  name: Joi.string(),
  age: Joi.number().integer().min(16).max(100),
  gpa: Joi.number().min(0).max(4),
})


module.exports = { studentSchema, bodyparser }
