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

  const index = collection.indexOf(studentDb);
  collection.splice(index, 1);
  collection.push(newStudent);

  

  console.log(collection);
  return newStudent;
}

module.exports = {
  patchStudentsService,
}
