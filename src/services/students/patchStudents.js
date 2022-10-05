let { collection } = require("./db.js")


function patchStudentsService(student, studentId) {
  const studentDb = collection.find((obj) => obj.id === studentId);


  if (!studentDb) {
    throw new Error('no student found');
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
