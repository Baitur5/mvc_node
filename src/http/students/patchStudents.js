
let { patchStudentsService } = require("../../services/students/index")
const { studentSchema, bodyparser } = require("../middlewares/patchStudentSchema")

async function patchStudents(ctx) {
  let student = await studentSchema.validateAsync(ctx.request.body);
  ctx.body = patchStudentsService(student, ctx);
  ctx.status = 201;
}



module.exports = {
  patchStudents,
};
