const memo_contentController = require('./memo_content');
const memoController = require('./memoController');
const tagController = require('./tagController')
const todoController = require('./todoController');
const categoryController = require('./categoryController')
const content_typeController = require('./content_typeController');
const memo_tagController = require('./memoTagController');
const apiController = {
  home(req, res) {
    res.send('Hello World!');
  }
}

module.exports = {
  memo_tagController,
memo_contentController,
content_typeController,
categoryController,
apiController,
memoController,
tagController,
todoController,

};
