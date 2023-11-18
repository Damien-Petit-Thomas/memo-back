const memoController = require('./tagController');
const tagController = require('./memoController')
const todoController = require('./todoController');

const apiController = {
  home(req, res) {
    res.send('Hello World!');
  }
}

module.exports = {
apiController,
memoController,
tagController,
todoController

};
