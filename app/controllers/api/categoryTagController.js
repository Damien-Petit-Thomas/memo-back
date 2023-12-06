const { category } = require('../../models')
const CoreController = require('./coreController')
const slug = require('../../utils/creeateSlug')

module.exports = class CategoryTagController extends CoreController {
  constructor() {
    super(category);
  }
  async create(req, res) {
    const data = req.body;
    data.slug = slug(data.name)
    const newCategory = await category.create(data)
    res.status(201).json(newCategory)
  }
  async update(req, res) {
    const { id } = req.params;
    if (req.body.name) {
      req.body.slug = slug(req.body.name)
    }
    //si name et color n'existent pas on envoie une erreur
    const findCategory = await category.findByPk(id);
    if (!findCategory) throw new ApiError('category not found', { statusCode: 404 });
    const updatedCategory = await category.update(id, req.body);
    res.status(200).json(updatedCategory);
  }
}




// const {ApiError} = require('../../helpers/errorHandler')
// const debug = require('debug')('app:categoryController')
// module.exports = {
// async getAll(req, res) {
//   const categories = await category.findAll();
//   res.status(200).json(categories);
// },
// async getOne(req, res) {
//   const {id } = req.params;
//   const findcategory = await category.findByPk(id);
//   if(!category) throw new ApiError('category not found', { statusCode: 404 });
//   res.status(200).json(findcategory);
// },

// async create(req, res) {
//   const data = req.body;

//  data.slug = slug(data.name)
//   const newcategory = await category.create(data);
//   res.status(200).json(newcategory);
// },


// async update(req, res) {
//   const { id } = req.params;
//   if(req.body.name){
//     req.body.slug = slug(req.body.name)
//   }
//   //si name et color n'existent pas on envoie une erreur
//   const findcategory = await category.findByPk(id);
//   if(!findcategory) throw new ApiError('category not found', { statusCode: 404 });
//   const updatedcategory = await category.update(id, req.body);
//   res.status(200).json(updatedcategory);
// },


// async delete(req, res) {
//   const {id } = req.params;
//   const deletedcategory = await category.delete(id);
//   if(!deletedcategory) throw new ApiError('category not found', { statusCode: 404 });
//   res.status(200).json({ message: 'category deleted' });
// }
// };