const  {memo_content}   = require('../../models');
const { ApiError } = require('../../helpers/errorHandler');
const slug = require('../../utils/creeateSlug')



module.exports = {
    async getAll(req, res) {
        const memo_contents = await memo_content.findAll();
        res.status(200).json(memo_contents);
    },

    async create(req,res){
        const data = req.body;
        const newmemo_content = await memo_content.create(data)
        res.status(201).json(newmemo_content)
    },

    async getOne(req,res){
        const {id } = req.params;
        const findmemo_content = await memo_content.findByPk(id);
        if(!findmemo_content) throw new ApiError('memo_content not found', { statusCode: 404 });
        res.status(200).json(findmemo_content);
    },

    async update(req,res){
        const { id } = req.params;
        const  {data} = req.body;
        const findmemo_content = await memo_content.findByPk(id);
        if(!findmemo_content) throw new ApiError('memo_content not found', { statusCode: 404 });
        const updatedmemo_content = await memo_content.update({id, ...data});
        res.status(200).json(updatedmemo_content);
    },


    async delete(req,res){
        const  { id } = req.params
        const deletedmemo_content = await memo_content.delete(id)
        if(!deletedmemo_content) throw new ApiError('memo_content not found', { statusCode: 404 });
        res.status(200).json({ message: 'memo_content deleted' });
    }
}