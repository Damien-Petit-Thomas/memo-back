const express = require('express');
const  { categoryController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler.js');


const router = express.Router();

router
    .route('/')
    .get(controllerHandler(categoryController.getAll))
    .post(controllerHandler(categoryController.create))
router
    .route('/:id(\\d+)')
    .put(controllerHandler(categoryController.update))
    .get(controllerHandler(categoryController.getOne))
    .delete(controllerHandler(categoryController.delete))


module.exports = router;