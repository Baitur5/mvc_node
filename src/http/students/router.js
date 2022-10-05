const { getStudents, getStudentsById, patchStudents, deleteStudents, postStudents } = require('./index.js');
const Router = require("koa-router");

const router = new Router();
router.get("/students", (ctx) => getStudents(ctx));
router.get("/students/:id", (ctx) => getStudentsById(ctx));
router.patch("/students/:id", (ctx) => patchStudents(ctx));
router.delete("/students/:id", (ctx) => deleteStudents(ctx));
router.post("/students", (ctx) => postStudents(ctx))


module.exports = { router }





