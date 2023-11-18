const express = require('express');
const  { todoController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler.js');


const router = express.Router();

router
    .route('/')
    .get(controllerHandler(todoController.getAll))
    .post(controllerHandler(todoController.create))
router
    .route('/:id(\\d+)')
    .put(controllerHandler(todoController.update))
    .get(controllerHandler(todoController.getOne))
    .delete(controllerHandler(todoController.delete))


module.exports = router;