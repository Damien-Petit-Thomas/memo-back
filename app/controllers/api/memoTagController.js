const { memoTag} = require('../../models/index.js');
const { ApiError } = require('../../helpers/errorHandler');



module.exports = {
  async getAll(req, res) {
    const memoTags = await memoTag.findAll();
    res.status(200).json(memoTags);
  },

  async create(req, res) {
    const {memo, tag} = req.body;
    const impudata = {memo_id: memo, tag_id: tag};
    const newMemoTag = await memoTag.create(impudata);
    res.status(200).json(newMemoTag);
  },

  async delete(req, res) {
    const {id} = req.params;
    const deletedMemoTag = await memoTag.delete(id);
    if(!deletedMemoTag) throw new ApiError('MemoTag not found', { statusCode: 404 });
    res.status(200).json({ message: 'MemoTag deleted' });
  }
  


};