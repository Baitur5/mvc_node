
let { getStudentsService } = require("../../services/students/index")

function getStudents(ctx){
  ctx.body = getStudentsService();
  ctx.status = 200;
}



module.exports = {
  getStudents,
};
