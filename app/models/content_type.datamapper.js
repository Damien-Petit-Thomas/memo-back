const CoreDatamapper = require('./core.datamapper');

module.exports = class Content_TypeDatamapper extends CoreDatamapper{
 


async findByPk(id){
  
let sql = `SELECT * FROM getContentTypesWithStyles($1) `;
let values = [id];
const response = await this.client.query(sql, values);
return response.rows[0].getcontenttypeswithstyles;


}

}