
let { collection, id } = require("./db")

function postStudentsService(student) {
  id += 1;

  const studentDb = {
    ...student,
    id,
  };

  collection.push(studentDb);
  console.log(collection);
  return studentDb;
}


module.exports = {
  postStudentsService
}
