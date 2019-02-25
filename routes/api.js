const express = require('express');
const router = express.Router();
const authenticated = require('../middleware/authenticated');
const { createNew, listTodos,updateTodo } = require('../controllers/todos');

//--------------- curent user -----------
router.get('/current_user', authenticated, (req, res) => res.send(req.user));
//---------------- todo route collection -------------
//create 
router.post('/todo', authenticated, async (req, res) => {
    try {
        const todo = await createNew(req.body, req.user);
        res.status(200).send(todo);
    } catch (error) {
        res.status(400).send(error);
    }
});
//list all todos
router.get('/todo', authenticated, async (req, res) => {
    try {
        const todos = await listTodos(req.user);
        return res.status(200).send(todos);
    } catch (error) {
        return res.status(400).send(error);
    }
});
//delete a todo
router.put('/todo/:id',async (req, res) => {
    try {
        await updateTodo(req.params.id);
        const todos = await listTodos(req.user);
        return res.status(200).send(todos);
    } catch (error) {
        return res.status(400).send(error);
    }
 })

module.exports = router;