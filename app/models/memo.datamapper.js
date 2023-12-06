const CoreDatamapper = require('./core.datamapper');

module.exports = class TagDatamapper extends CoreDatamapper {
  tablename = 'memo';

  async getOneMemo(memo_id) {
    // let sql = `
    //   SELECT 
    //     m.id as memo_id,
    //     mc.*,
    //     ct.*,
    //     c.*,
    //   FROM ${this.tablename} AS m
    //   LEFT JOIN memo_content AS mc ON m.id = mc.memo_id
    //   LEFT JOIN content_type AS ct ON mc.type_id = ct.id
    //   LEFT JOIN category AS c ON m.category_id = c.id
    //   LEFT JOIN memo_tag AS mt ON m.id = mt.memo_id
    //   WHERE m.id = $1
    //   GROUP BY m.id, ct.id, c.id
    //   ARRAY_AGG(mt.memo_id)
    // `;
    let sql = `SELECT * FROM getMemo($1) `;
    let values = [memo_id];
    const response = await this.client.query(sql, values);
    return response.rows;
  }


  async getAllMemo() {
    let sql = `SELECT * FROM getAllMemos() `;
    const response = await this.client.query(sql);
    return response.rows;
  }
  
  

}