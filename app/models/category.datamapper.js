const CoreDatamapper = require('./core.datamapper');

module.exports = class CategoryDatamapper extends CoreDatamapper{

async delete(id){
  let sql = `DELETE FROM ${this.tablename} WHERE id = $1`;
  let values = [id];
  return await this.client.query(sql, values);

}


}

