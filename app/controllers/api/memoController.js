const { memo }   = require('../../models');
const { ApiError } = require('../../helpers/errorHandler');


module.exports = {
    async getAll(req, res) {
        const memos = await memo.findAll();
        res.status(200).json(memos);
    },

    async create(req, res){
        const { title, content } = req.body;
        const impudata = { title, content };
        const newMemo = await memo.create(impudata );
        res.status(200).json(newMemo);
    }
};