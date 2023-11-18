const { todo }   = require('../../models');
const { ApiError } = require('../../helpers/errorHandler');


module.exports = {
    async getAll(req, res) {
        const todos = await todo.findAll();
        res.status(200).json(todos);
    },

    async create(req, res) {
        const data = req.body;
        const newTodo = await todo.create(data);
        res.status(200).json(newTodo);
    },

    async getOne(req, res) {
        const {id } = req.params;
        const findTodo = await todo.findByPk(id);
        if(!todo) throw new ApiError('Todo not found', { statusCode: 404 });
        res.status(200).json(findTodo);
    },

    async update(req, res) {
        console.log("coucou")
        const { id } = req.params;
        const {description, done } = req.body;
        const data = {description, done };
        const findTodo = await todo.findByPk(id);
        if(!findTodo) throw new ApiError('Todo not found', { statusCode: 404 });
        const updatedTodo = await todo.update({id, ...data});
        res.status(200).json(updatedTodo);
    },


    async delete(req, res) {
        const {id } = req.params;
        const deletedTodo = await todo.delete(id);
        if(!deletedTodo) throw new ApiError('Todo not found', { statusCode: 404 });
        res.status(200).json({ message: 'Todo deleted' });
    }
};