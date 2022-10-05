
let { getStudentsByIdService } = require("../../services/students/index")


function getStudentsById(ctx) {
  ctx.body = getStudentsByIdService(ctx);
  ctx.status = 200;
}



module.exports = {
  getStudentsById,
};
