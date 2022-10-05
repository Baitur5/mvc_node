const bodyparser = require('koa-bodyparser');
const { router } = require("./http/students/router");

const Koa = require("koa");

async function main() {

  const app = new Koa();
  const HTTP_PORT = 8080;

  app.use(bodyparser());

  //middleware
  app.use(async (ctx, next) => {
    console.log(ctx.method, ctx.url);
    try {
      await next();
    } catch (error) {
      if (error.isJoi) {
        ctx.body = error.message;
      }
      console.log(error);
    }
    console.log("After business logic")//this will happen at the end
  });

  app.use(router.routes());

  app.listen(HTTP_PORT, () => {
    console.log('server started at port', HTTP_PORT);
  });

}

main().catch(console.log);

