// CoreRouter.js
const controllerHandler = require('../../helpers/controllerHandler');


class CoreRouter {
  constructor(controller, expressInstance) {
    this.controller = controller;
    this.router = expressInstance.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router
      .route('/')
      .get(controllerHandler(this.controller.getAll.bind(this.controller)))
      .post(controllerHandler(this.controller.create.bind(this.controller)));

    this.router
      .route('/:id(\\d+)')
      .patch(controllerHandler(this.controller.update.bind(this.controller)))
      .get(controllerHandler(this.controller.getOne.bind(this.controller)))
      .delete(controllerHandler(this.controller.delete.bind(this.controller)));
  }
}

module.exports = CoreRouter;
