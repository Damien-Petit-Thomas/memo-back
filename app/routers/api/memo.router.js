const express = require('express');
const  { memoController } = require('../../controllers/api/index.js');
const controllerHandler = require('../../helpers/controllerHandler.js');


const router = express.Router();

router
    .route('/')
    .get(controllerHandler(memoController.getAll))
    .post(controllerHandler(memoController.create))
// router
//     .route('/create')

module.exports = router;