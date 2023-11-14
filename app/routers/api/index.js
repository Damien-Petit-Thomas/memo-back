const express = require('express');

const tagRouter = require('./tag.router');
const { apiController } = require('../../controllers/api');
const { ApiError } = require('../../helpers/errorHandler');
const router = express.Router();

router.all('/', apiController.home);
router.use('/tag', tagRouter);

router.use(() => {
  throw new ApiError('API route not found', { statusCode: 400 });
});
module.exports = router;
