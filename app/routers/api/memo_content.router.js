const express = require('express');
const router = express.Router();
const {controllerHandler} = require('../../helpers/controllerHandler.js');
const {memo_contentController} = require('../../controllers/api/index.js');



router
    .route('/')
    .get(controllerHandler(memo_contentController.getAll))
    .post(controllerHandler(memo_contentController.create))
router
    .route('/:id(\\d+)')
    .put(controllerHandler(memo_contentController.update))
    .get(controllerHandler(memo_contentController.getOne))
    .delete(controllerHandler(memo_contentController.delete))



module.exports = router;