const client = require('../config/db');
const Tag = require('./tag.datamapper');

module.exports = {
tag: new Tag(client)

};
