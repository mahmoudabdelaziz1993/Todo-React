var mongoose = require('mongoose');
const { Schema } = mongoose;
const todoSchema = new Schema({
    title: String,
    description: String,
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
const Todo = mongoose.model('todos', todoSchema);
module.exports = { Todo };