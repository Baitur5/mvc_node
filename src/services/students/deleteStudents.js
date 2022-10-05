let { collection } = require("./db")

function deleteStudentsService(id) {
  const studentId = Number(id);
  const studentDb = collection.find(({ id }) => id === studentId);

  if (!studentDb) {
    ctx.throw(404);
  }

  const index = collection.indexOf(studentDb);
  if (index > -1) { // only splice array when item is found
    collection.splice(index, 1); // 2nd parameter means remove one item only
  }
}


module.exports = { deleteStudentsService};
