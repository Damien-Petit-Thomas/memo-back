const client = require('../config/db'); 
const CoreDatamapper = require('./core.datamapper');

class Typedatamapper extends CoreDatamapper{
  tablename = 'content_type'
}
class CategoryDatamapper extends CoreDatamapper {
  tablename = 'category';
}
class TagDatamapper extends CoreDatamapper {
  tablename = 'tag';
}
class TodoDatamapper extends CoreDatamapper {
  tablename = 'todo';
}

class LexiconDatamapper extends CoreDatamapper {
  tablename = 'lexicon';
}

const Memo = require('./memo.datamapper')
const MemoTag = require('./memo_tag.datamapper');
const MemoContent = require('./memo_content.datamapper');

module.exports = {
memo_content: new MemoContent(client),
content_type:  new Typedatamapper(client),
memoTag: new MemoTag(client),
category: new CategoryDatamapper(client),
todo: new TodoDatamapper(client),
tag: new TagDatamapper(client),
memo: new Memo(client),
lexicon: new LexiconDatamapper(client)

};
