
const CoreRouter = require('./coreRouter');;
const controllerHandler = require('../../helpers/controllerHandler.js');

class MemoRouter extends CoreRouter {
    constructor(controller, router) {
        super(controller, router);
        this.setUpNewRoutes();
    }

setUpNewRoutes(){
    this.router
        .route('/all')
        .get(controllerHandler(this.controller.getAllMemo.bind(this.controller)))
    this.router 
        .route('/:slug')
        .get(controllerHandler(this.controller.getMemoBySlug.bind(this.controller)))

}
}

module.exports = MemoRouter;
