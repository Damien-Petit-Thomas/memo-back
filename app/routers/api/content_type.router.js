const express = require('express');
const router = express.Router();
const  {content_typeController} = require('../../controllers/api/index.js');
const controllerHandler = require('../../helpers/controllerHandler.js');


router
    .route('/')
    .get(controllerHandler(content_typeController.getAll))
    .post(controllerHandler(content_typeController.create))
router
    .route('/:id(\\d+)')
    .patch(controllerHandler(content_typeController.update))
    .get(controllerHandler(content_typeController.getOne))
    .delete(controllerHandler(content_typeController.delete))




module.exports = router;