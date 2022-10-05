
let { postStudentsService } = require("../../services/students/index")
let { bodyparser } = require("../middlewares/patchStudentSchema")
const { studentSchema } = require("../middlewares/postStudentSchema")

async function postStudents(ctx) {
  const student = await studentSchema.validateAsync(ctx.request.body);
  ctx.body = postStudentsService(student);
  ctx.status = 201;
}



module.exports = {
  postStudents,
};
