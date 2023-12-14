const {ApiError} = require('../../helpers/errorHandler')
const { link } = require('../../models');
const CoreController = require('./coreController');


module.exports = class LinkController extends CoreController {
  constructor(model) {
    super(model)
  }


  async getAll(req, res) {
    const response = await this.datamapper.findAllFormated();
    if(!response) throw new ApiError('Not found', { statusCode: 404 });
    res.status(200).json(response);
  }



}
