const express = require('express');
const { ApiError } = require('../../helpers/errorHandler');
const router = express.Router();

const CoreRouter = require('./coreRouter');
const MemoRouter = require('./memo.router.js');

const {
  tagController,
  apiController,
  linkController,
  todoController,
  memoController,
  lexiconController,
  categoryController,
  memoContentController,
  contentTypeController,
} = require('../../controllers/api');






const tagRouter = new CoreRouter(tagController, express).router;
const linkRouter = new CoreRouter(linkController, express).router;
const todoRouter = new CoreRouter(todoController, express).router;
const memoRouter = new MemoRouter(memoController, express).router;
const lexiconRouter = new CoreRouter(lexiconController, express).router;
const categoryRouter = new CoreRouter(categoryController, express).router;
const memoContentRouter = new CoreRouter(memoContentController, express).router;
const contentTypeRouter = new CoreRouter(contentTypeController, express).router;


router.all('/', apiController.home);
router.use('/tag', tagRouter);
router.use('/link', linkRouter);
router.use('/todo', todoRouter);
router.use('/memo', memoRouter);
router.use('/lexicon', lexiconRouter) 
router.use('/category', categoryRouter)
router.use('/memo_content', memoContentRouter)
router.use('/contentType', contentTypeRouter)

router.use(() => {
  throw new ApiError('API route not found', { statusCode: 400 });
});
module.exports = router;
