const client = require('../config/db'); 


const Memo = require('./memo.datamapper')
const MemoTag = require('./memo_tag.datamapper');
const CoreDatamapper = require('./core.datamapper');
const MemoContent = require('./memo_content.datamapper');
const LinkDatamapper = require('./link.datamapper');
const Content_TypeDatamapper = require('./content_type.datamapper');


module.exports = {
  memo: new Memo(client, 'memo'),
  memoTag: new MemoTag(client, 'memo_tag'),
  tag:  new CoreDatamapper(client, 'tag'),
  link: new LinkDatamapper(client, 'link'),
  todo : new CoreDatamapper(client, 'todo'),
  style : new CoreDatamapper(client, 'style'),
  lexicon : new CoreDatamapper(client, 'lexicon'),
  category : new CoreDatamapper(client, 'category'),
  memoContent: new MemoContent(client , 'memo_content'),
  contentType : new Content_TypeDatamapper(client, 'content_type'),
};
