import indexController from './indexcontroller'
const controllerInit = {
    getAllrouters(app,router){
        app.use(router(_=>{
            _.get('/index', indexController.indexAction())
        }))
    }
}
export default controllerInit;