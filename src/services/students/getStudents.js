
let { collection } = require("./db")
function getStudentsService() {
  console.log("collection", collection)
  return collection;
}


module.exports = { getStudentsService };
