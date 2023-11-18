const client = require('../config/db');
const Tag = require('./tag.datamapper');
const Memo = require('./memo.datamapper')
const Todo = require('./todo.datamapper')
const Category = require('./category.datamapper')
module.exports = {
category: new Category(client),
todo: new Todo(client),
tag: new Tag(client),
memo: new Memo(client)

};
