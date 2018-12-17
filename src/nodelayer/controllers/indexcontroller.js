import IndexModel from '../modles/indexModel'
const indexController = {
    indexAction(){
        return async  (ctx, next)=>{
            const indexModelIns = new IndexModel()
            const result = await indexModelIns.getData()
            //  'index'  实际就是打开 index.html
            ctx.body = await ctx.render('index',{data:result})  
        }
    }
}
export default indexController