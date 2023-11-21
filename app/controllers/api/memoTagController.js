const { memoTag} = require('../../models/index.js');
const {ApiError} = require('../../helpers/error.js');


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
  }


};