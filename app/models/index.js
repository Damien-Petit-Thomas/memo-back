const client = require('../config/db');
const Tag = require('./tag.datamapper');
const Memo = require('./memo.datamapper')
const Todo = require('./todo.datamapper');
const Category = require('./category.datamapper');
const Type = require('./content_type.datamapper');
const Memo_content = require('./memo_content.datamapper');
const MemoTag = require('./memo_tag.datamapper');

module.exports = {
memo_content: new Memo_content(client),
content_type:  new Type(client),
memoTag: new MemoTag(client),
category: new Category(client),
todo: new Todo(client),
tag: new Tag(client),
memo: new Memo(client)

};
