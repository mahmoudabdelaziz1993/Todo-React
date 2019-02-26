const mongoose = require('mongoose');
const { Todo } = require('../models/Todo');
const _ = require('lodash');

var createNew = async ({ title, description }, { _id }) => {
    const xtodo = new Todo({
        title,
        description,
        owner: _id,
        completedAt: Date.now()
    });
    try {
        const todo = await xtodo.save();
        return todo;
    } catch (error) {
        return error;
    }
};
var listTodos = async ({_id}) => {
    try {
        const todos = await Todo.find({owner:_id,completed:false});
        return todos;
    } catch (error) {
        return error;
    }
};
var updateTodo = async (id)=>{
    try {
        const todo = await Todo.findById(id)
        todo.completed = true;
        todo.completedAt = Date.now();
        const res = await todo.save();
        return res; 
    } catch (error) {
        return error;
    }  
};

var deleteTodo =async (id,owner)=>{
    try {
        const todo = await Todo.findByIdAndDelete({_id:id,owner:owner});
        return todo;
    } catch (error) {
        return error;
    }
};
module.exports = { createNew , listTodos , updateTodo,deleteTodo}