const Koa = require('koa')
const koaLog = require('./koa-logger')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'qitiandasheng'
})
router.get('/zhubajie', (ctx, next) => {
  ctx.body = 'zhubajie'
})
// function delay() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res()
//     }, 1000)
//   })
// }

app.use(koaLog)
app
  .use(router.routes())
  .use(router.allowedMethods())

// app.use(async (ctx, next) => {
//   console.log(ctx);
//   if (ctx.request.url === '/') {
//     ctx.body = 'sunwukong'
//   } else {
//     ctx.body = '<h1>404</h1>'
//   }
//   // ctx.body = '1'
//   await next()
//   ctx.body += '2'
// })
// app.use(async (ctx, next) => {
//   ctx.body += '3'
//   await delay()
//   await next()
//   ctx.body += '4'
// })
// app.use(async (ctx, next) => {
//   ctx.body += '5'
//   await next()
//   ctx.body += '6'
// })

app.listen(3000)
