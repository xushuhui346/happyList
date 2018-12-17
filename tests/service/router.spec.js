const superagent = require('supertest')
const app = require('../../build/app.js')

function request(){
    // supertest 模拟http请求
    return superagent(app.listen() )
}
describe('nodelayer自动化测试脚本',function(){
    describe('api接口测试',function(){
        it('获取测试的数据',function(done){
            request()
                .get('/index/test')
                .set('Accept','application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err,response){
                    if(response.body.data==='hello test'){
                        done();
                    }else{
                        done(new Error('测试接口与期望数据不符合:'+err))
                    }
                })
        })
    })
    describe('nodelayer容错测试',function(){
        it('测试404脚本容错http code',function(done){
            request()
            // 不存在的路由，测试404
            .get('/message/notfound')
            .expect(404,done);
        })
    })
})