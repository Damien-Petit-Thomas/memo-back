const express = require('express');

const { apiController } = require('../../controllers/api');
const { ApiError } = require('../../helpers/errorHandler');

const router = express.Router();

router.use('/', apiController.home);


router.use(() => {
  throw new ApiError('API route not found', { statusCode: 400 });
});
module.exports = router;
