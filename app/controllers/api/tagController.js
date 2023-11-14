const { tag }   = require('../../models');
const { ApiError } = require('../../helpers/errorHandler');


module.exports = {
    async getAll(req, res) {
        const tags = await tag.findAll();
        res.status(200).json(tags);
    }
};