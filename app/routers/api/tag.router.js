const express = require('express');
const  { tagController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler.js');


const router = express.Router();

router
    .route('/')
    .get(controllerHandler(tagController.getAll))
    .post(controllerHandler(tagController.create))
router
    .route('/:id(\\d+)')
    .put(controllerHandler(tagController.update))
    .get(controllerHandler(tagController.getOne))
    .delete(controllerHandler(tagController.delete))

module.exports = router;