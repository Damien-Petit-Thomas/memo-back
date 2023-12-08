const CoreController = require('./coreController'); 
const CategoryTagController = require('./categoryTagController');
const memoController = require('./memoController');

const { tag } = require('../../models')
const { todo} = require('../../models')
const { lexicon } = require('../../models'); 
const { category } = require('../../models') 
const { contentType } = require('../../models') 
const { memoContent } = require('../../models')


const apiController = {
home(req, res) {
    res.send('Hello World!');
  }
}

module.exports = {
   apiController,
   memoController,
   todoController : new CoreController(todo),
   tagController: new CategoryTagController(tag),
   lexiconController :new CoreController(lexicon),
   memoContentController :new CoreController(memoContent),
   categoryController :new CategoryTagController(category),
   contentTypeController :new CoreController(contentType)

};
