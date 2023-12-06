const CoreController = require('./coreController'); 
const CategoryTagController = require('./categoryTagController');
const memoController = require('./memoController');

const { tag } = require('../../models')
const { todo} = require('../../models')
const { lexicon } = require('../../models'); 
const { category } = require('../../models') 
const { content_type } = require('../../models') 
const { memo_content } = require('../../models')

const todoController = new CoreController(todo);
const tagController = new CategoryTagController(tag);
const lexiconController = new CoreController(lexicon);
const memoContentController = new CoreController(memo_content);
const categoryController = new CategoryTagController(category);
const content_typeController = new CoreController(content_type);




const apiController = {
  home(req, res) {
    res.send('Hello World!');
  }
}

module.exports = {
  apiController,
  tagController,
  memoController,
  todoController,
  lexiconController, 
  categoryController,
  memoContentController,
  content_typeController,

};
