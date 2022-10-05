const { getStudents } = require("./getStudents");
const { getStudentsById } = require("./getStudentsById");
const { postStudents } = require("./postStudents");
const { patchStudents } = require("./patchStudents");
const { deleteStudents } = require("./deleteStudents");
const { bodyparser } = require("../middlewares/patchStudentSchema")


module.exports = {
  getStudents,
  getStudentsById,
  postStudents,
  patchStudents,
  deleteStudents,
  bodyparser,
};
