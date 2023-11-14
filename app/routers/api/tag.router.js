const express = require('express');
const  { tagController } = require('../../controllers/api');
const controllerHandler = require('../../helpers/controllerHandler.js');


const router = express.Router();

router
    .route('/')
    .get(controllerHandler(tagController.getAll))

module.exports = router;