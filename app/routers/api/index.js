const express = require('express');

const categoryRouter = require('./category.router')
const todoRouter = require('./todo.router');
const memoRouter = require('./memo.router');
const tagRouter = require('./tag.router');
const content_typeRouter = require('./content_type.router');
const { apiController } = require('../../controllers/api');
const { ApiError } = require('../../helpers/errorHandler');
const router = express.Router();

router.all('/', apiController.home);
router.use('/tag', tagRouter);
router.use('/memo', memoRouter);
router.use('/todo', todoRouter);
router.use('/category', categoryRouter)
router.use('/content_type', content_typeRouter)

router.use(() => {
  throw new ApiError('API route not found', { statusCode: 400 });
});
module.exports = router;
