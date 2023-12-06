const CoreDatamapper = require('./core.datamapper');

module.exports = class Memo_contentDatamapper extends CoreDatamapper{
  tablename = 'memo_content'


async deleteByMemoId(memo_id){
  let sql = `DELETE FROM ${this.tablename} WHERE memo_id = $1`;
  let values = [memo_id];
  return await this.client.query(sql, values);
};

async getMemoContents(memo_id){
  let sql = `SELECT * FROM ${this.tablename} WHERE memo_id = $1`;
  let values = [memo_id];
  const response = await this.client.query(sql, values);
  return response.rows;
}

}