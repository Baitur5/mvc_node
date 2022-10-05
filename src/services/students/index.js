let { deleteStudentsService } = require("./deleteStudents");
let { postStudentsService } = require("./postStudents");
let { patchStudentsService } = require("./patchStudents");
let { getStudentsService } = require("./getStudents");
let { getStudentsByIdService } = require("./getStudentsById");



module.exports = {
  deleteStudentsService,
  postStudentsService,
  patchStudentsService,
  getStudentsService,
  getStudentsByIdService,
};
