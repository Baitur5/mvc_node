let { deleteStudentsService } = require("../../services/students/index")


function deleteStudents(ctx) {
  ctx.body = deleteStudentsService(ctx.params.id);
  ctx.status = 200;
}

module.exports = {
  deleteStudents,
};
