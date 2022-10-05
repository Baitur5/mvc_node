let { patchStudentsService } = require("../../services/students/index")
const { studentSchema, bodyparser } = require("../middlewares/patchStudentSchema")

async function patchStudents(ctx) {
  const student = await studentSchema.validateAsync(ctx.request.body);

  ctx.body = patchStudentsService(student, Number(ctx.params.id));
  ctx.status = 201;
}



module.exports = {
  patchStudents,
};
