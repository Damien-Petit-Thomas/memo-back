const express = require('express');

const apiRouter = require('./api');

const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

router.use('/api', apiRouter);

router.get('/', (req, res) => {
    res.send('Hello World!');
    });

router.use(errorHandler);

module.exports = router;
