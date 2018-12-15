import _ from 'lodash'

let config = {}
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
