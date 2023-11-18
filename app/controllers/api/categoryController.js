const { category } = require('../../models')
const {ApiError} = require('../../helpers/errorHandler')


module.exports = {
async getAll(req, res) {
  const categories = await category.findAll();
  res.status(200).json(categories);
},

async create(req, res) {
  const data = req.body;
  const newcategory = await category.create(data);
  res.status(200).json(newcategory);
},

async getOne(req, res) {
  const {id } = req.params;
  const findcategory = await category.findByPk(id);
  if(!category) throw new ApiError('category not found', { statusCode: 404 });
  res.status(200).json(findcategory);
},

async update(req, res) {
  const { id } = req.params;
  const {description, done } = req.body;
  const data = {description, done };
  const findcategory = await category.findByPk(id);
  if(!findcategory) throw new ApiError('category not found', { statusCode: 404 });
  const updatedcategory = await category.update({id, ...data});
  res.status(200).json(updatedcategory);
},


async delete(req, res) {
  const {id } = req.params;
  const deletedcategory = await category.delete(id);
  if(!deletedcategory) throw new ApiError('category not found', { statusCode: 404 });
  res.status(200).json({ message: 'category deleted' });
}
};