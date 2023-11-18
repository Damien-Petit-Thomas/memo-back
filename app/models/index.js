const client = require('../config/db');
const Tag = require('./tag.datamapper');
const Memo = require('./memo.datamapper')
const Todo = require('./todo.datamapper')
module.exports = {
todo: new Todo(client),
tag: new Tag(client),
memo: new Memo(client)

};
