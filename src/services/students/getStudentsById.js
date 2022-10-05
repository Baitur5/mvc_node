
let { collection } = require("./db")
function getStudentsByIdService(ctx) {
  const id_to_get = Number(ctx.params.id);
  const student = collection.find(({ id }) => id === id_to_get);

  if (!student) {
    ctx.throw(404);
  }
  return student;
}



module.exports = { getStudentsByIdService };
