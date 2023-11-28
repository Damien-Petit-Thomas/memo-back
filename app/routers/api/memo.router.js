const express = require('express');
const  { memoController } = require('../../controllers/api/index.js');
const controllerHandler = require('../../helpers/controllerHandler.js');


const router = express.Router();

router
    .route('/')
    .get(controllerHandler(memoController.getAll))
    .post(controllerHandler(memoController.create))
router
    .patch('/:id(\\d+)', controllerHandler(memoController.update))
    .get('/:id(\\d+)', controllerHandler(memoController.getOne))
    .delete('/:id(\\d+)', controllerHandler(memoController.delete))
    

module.exports = router;