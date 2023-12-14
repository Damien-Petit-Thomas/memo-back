const CoreDatamapper = require('./core.datamapper');

module.exports = class LinkDatamapper extends CoreDatamapper{


async findAllFormated(){
  let sql = `SELECT * FROM getAllLinks()`;
  const response = await this.client.query(sql);
  return response.rows;
};



} 