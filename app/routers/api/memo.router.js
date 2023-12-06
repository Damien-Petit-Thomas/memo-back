
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

}
}

module.exports = MemoRouter;
