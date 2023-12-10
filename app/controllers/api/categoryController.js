const { category } = require('../../models')
const { tag } = require('../../models')
const CoreController = require('./coreController')
const slug = require('../../utils/creeateSlug')

module.exports = class CategoryTagController extends CoreController {
  constructor(model) {
    super(model)
  }

  async create(req, res) {
    const data = req.body;
    data.slug = slug(data.name)
    const newCategory = await this.datamapper.create(data)
    res.status(201).json(newCategory)
  }
  async update(req, res) {
    const { id } = req.params;
    if (req.body.name) {
      req.body.slug = slug(req.body.name)
    }
    //si name et color n'existent pas on envoie une erreur
    const findCategory = await this.datamapper.findByPk(id);
    if (!findCategory) throw new ApiError('category not found', { statusCode: 404 });
    const updatedCategory = await this.datamapper.update(id, req.body);
    res.status(200).json(updatedCategory);
  }
}



