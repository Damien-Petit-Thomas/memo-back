const CoreController = require('./coreController'); 
const CategoryTagController = require('./categoryController');
const memoController = require('./memoController');

const  {
  tag, 
  link,
  todo,
  lexicon,
  category,
  contentType,
  memoContent
} = require('../../models')



const apiController = {
home(req, res) {
    res.send('Hello World!');
  }
}

module.exports = {
  apiController,
  memoController,
  linkController: new CoreController(link),
  todoController : new CoreController(todo),
  tagController: new CategoryTagController(tag),
  lexiconController :new CoreController(lexicon),
  memoContentController :new CoreController(memoContent),
  categoryController :new CategoryTagController(category),
  contentTypeController :new CoreController(contentType)

};
