import _ from 'lodash'
import path from 'path'
let config = {
    'viewDir':path.join(__dirname,'..','views'),
    'staticDir':path.join(__dirname,'..','assets'),
    'env':process.env.NODE_ENV 
}
// 开发环境
if(process.env.NODE_ENV ==='development'){
    const localConfig = {
        port :8081
    }
    config = _.extend(config,localConfig)
}

// 线上环境
if(process.env.NODE_ENV ==='production'){
    const localConfig = {
        port :8081
    }
    config = _.extend(config,localConfig)
}
// console.log(`config:${config.port}`)
export default config
