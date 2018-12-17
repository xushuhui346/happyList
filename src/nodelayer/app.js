import Koa  from 'koa';
import config from './config'
import router from 'koa-simple-router'
import render from 'koa-swig'
import serve from 'koa-static'
import co from 'co'
import controllerInit from './controllers/controllerinit'
import log4js from 'log4js'
import errorHandler from './middlewares/errorHandler'
const app = new Koa();

// swig 渲染
app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody:false
}))

// 静态资源 渲染
app.use(serve(config.staticDir))

// log4js配置
log4js.configure({
    appenders: { nodeerr: { type: 'file', filename: './logs/nodeerr.log' } },
  categories: { default: { appenders: ['nodeerr'], level: 'error' } }
})

const logger = log4js.getLogger('nodeerr')

errorHandler.error(app,logger)

// 初始化所有路由
controllerInit.getAllrouters(app,router)

app.listen(config.port,()=>{
    console.log(`happylist listening on ${config.port}`)
});
module.exports = app;