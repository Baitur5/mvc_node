let { collection } = require("./db")

function deleteStudentsService(id) {
  const studentId = Number(id);
  const studentDb = collection.find(({ id }) => id === studentId);

  if (!studentDb) {
    ctx.throw(404);
  }

  const index = collection.indexOf(studentDb);
  collection.splice(index, 1);
}


module.exports = { deleteStudentsService};
