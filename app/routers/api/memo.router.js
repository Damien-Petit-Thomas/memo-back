const express = require('express');
const  { memoController } = require('../../controllers/api/index.js');
const controllerHandler = require('../../helpers/controllerHandler.js');


const router = express.Router();

router
    .route('/')
    .get(controllerHandler(memoController.getAll))
router
    .route('/create')
    .post(controllerHandler(memoController.create))

module.exports = router;