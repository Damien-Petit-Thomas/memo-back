const client = require('../config/db'); 

const Memo = require('./memo.datamapper')
const MemoTag = require('./memo_tag.datamapper');
const CoreDatamapper = require('./core.datamapper');


module.exports = {
  memo: new Memo(client, 'memo'),
  memoTag: new MemoTag(client, 'memo_tag'),
  tag:  new CoreDatamapper(client, 'tag'),
  todo : new CoreDatamapper(client, 'todo'),
  lexicon : new CoreDatamapper(client, 'lexicon'),
  category : new CoreDatamapper(client, 'category'),
  memoContent: new CoreDatamapper(client , 'memo_content'),
  contentType : new CoreDatamapper(client, 'content_type'),
};
