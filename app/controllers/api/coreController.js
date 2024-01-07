const {ApiError} = require('../../helpers/errorHandler')

module.exports = class CoreController {
  constructor(datamapper) {
    this.datamapper = datamapper;
  }

  async getAll(req, res) {
    const response = await this.datamapper.findAll();
    if(!response) throw new ApiError('Not found', { statusCode: 404 });
    res.status(200).json(response);
  }
  
  
  async getOne(req, res) {
    const {id} = req.params;
      const response = await this.datamapper.findByPk(id);
      if(!response) throw new ApiError('Not found', { statusCode: 404 });
      res.status(200).json(response);
  }

  async create(req, res) {
      const response = await this.datamapper.create(req.body);
    if(!response) throw new ApiError('Not found', { statusCode: 404 });  
    res.status(200).json(response);

  }

  async update(req, res) {
    const { id } = req.params;
      const response = await this.datamapper.update(id, req.body);
      if(!response) throw new ApiError('Not found', { statusCode: 404 });
      res.status(200).json(response);

  }

  async delete(req, res) {
  const { id } = req.params;
      const response = await this.datamapper.delete(id);
      if(!response) throw new ApiError('Not found', { statusCode: 404 });
      res.status(200).json(response);
   
  }

}