const Mocha = require('mocha')
const mocha  = new Mocha({
    // mocha报告
    reporter:'mochawesome',
    // mocha 报告  配置
    reporterOptions:{
        reportDir:'./docs/service-reporter',
        reportFilename:'nodelayer'
    }
})
// 添加测试文件
mocha.addFile('./tests/service/router.spec.js')
// 运行mocha
mocha.run(function(){
    console.log('all done')
    // 释放进程
    process.exit()
})

