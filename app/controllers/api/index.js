const memoController = require('./tagController');
const tagController = require('./memoController')
const todoController = require('./todoController');
const categoryController = require('./categoryController')
const apiController = {
  home(req, res) {
    res.send('Hello World!');
  }
}

module.exports = {
categoryController,
apiController,
memoController,
tagController,
todoController

};
