const  {tag}   = require('../../models');
const { ApiError } = require('../../helpers/errorHandler');
const slug = require('../../utils/creeateSlug')



module.exports = {
    async getAll(req, res) {
        const tags = await tag.findAll();
        res.status(200).json(tags);
    },

    async create(req,res){
        const data = req.body;
        data.slug = slug(data.name)
        const newTag = await tag.create(data)
        res.status(201).json(newTag)
    },

    async getOne(req,res){
        const {id } = req.params;
        const findTag = await tag.findByPk(id);
        if(!findTag) throw new ApiError('Tag not found', { statusCode: 404 });
        res.status(200).json(findTag);
    },

    async update(req,res){
        const { id } = req.params;
        const  {name, color} = req.body;
        const data = {name, color};
        data.slug = slug(data.name)
        const findTag = await tag.findByPk(id);
        if(!findTag) throw new ApiError('Tag not found', { statusCode: 404 });
        const updatedTag = await tag.update({id, ...data});
        res.status(200).json(updatedTag);
    },


    async delete(req,res){
        const  { id } = req.params
        const deletedTag = await tag.delete(id)
        if(!deletedTag) throw new ApiError('Tag not found', { statusCode: 404 });
        res.status(200).json({ message: 'Tag deleted' });
    }
}