const CoreDatamapper = require('./core.datamapper');

module.exports = class MemoDatamapper extends CoreDatamapper {


  async getOneMemo(memo_id) {
    
    let sql = `SELECT * FROM getMemo($1) `;
    let values = [memo_id];
    const response = await this.client.query(sql, values);
    return response.rows;
  }

  async getMemoBySlug(slug) {
    let sql = `SELECT * FROM getMemoBySlug($1) `;
    let values = [slug];
    const response = await this.client.query(sql, values);
    return response.rows;
  }

  async getAllMemo() {
    let sql = `SELECT * FROM getAllMemos() `;
    const response = await this.client.query(sql);
    return response.rows;
  }
  
  

}