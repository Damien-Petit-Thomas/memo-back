const tagController = require('./tagController');



const apiController = {
  home(req, res) {
    res.send('Hello World!');
  }
}

module.exports = {
apiController,
tagController

};
