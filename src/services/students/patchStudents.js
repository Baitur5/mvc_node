let { collection } = require("./db.js")


function patchStudentsService(student, ctx) {

  const studentId = Number(ctx.params.id);
  const studentDb = collection.find((obj) => obj.id === studentId);


  if (!studentDb) {
    ctx.throw(404);
  }

  const newStudent = {
    ...studentDb,
    ...student,
  }

  collection = collection
    .filter(({ id }) => id !== studentId);
  collection.push(newStudent);


  console.log(collection);
  return newStudent;
}

module.exports = {
  patchStudentsService,
}
