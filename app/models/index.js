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

const Memo = require('./memo.datamapper')
const Type = require('./content_type.datamapper');
const MemoTag = require('./memo_tag.datamapper');

module.exports = {
memo_content: new Typedatamapper(client),
content_type:  new Type(client),
memoTag: new MemoTag(client),
category: new CategoryDatamapper(client),
todo: new TodoDatamapper(client),
tag: new TagDatamapper(client),
memo: new Memo(client)

};
