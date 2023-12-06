const {content_type} = require('../../models') 
const {ApiError} = require('../../helpers/errorHandler')


module.exports = {
  async getAll(req, res) {
    const types = await content_type.findAll();
    res.status(200).json(types)
  },

async create(req, res) {
  const data = req.body;
  const newType = await content_type.create(data);
  res.status(200).json(newType)
},

async getOne(req, res) {
  const {id} = req.params;
  const findType = await content_type.findByPk(id);
  if(!findType) throw new ApiError('Type not found', { statusCode: 404 });
  res.status(200).json(findType);
},


async update(req, res) {
  const { id } = req.params;
  const {data} = req.body;
  console.log(req.body)
  const findType = await content_type.findByPk(id);
  if(!findType) throw new ApiError('Type not found', { statusCode: 404 });
  const updatedType = await content_type.update(id, data);
  res.status(200).json(updatedType);

},


async delete(req, res) {
  const {id} = req.params;
  const deletedType = await content_type.delete(id);
  if(!deletedType) throw new ApiError('Type not found', { statusCode: 404 });
  res.status(200).json({ message: 'Type deleted' });



}


}

