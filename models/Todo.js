var mongoose = require('mongoose');
const {Schema}= mongoose;
const todoSchema = new Schema({
    title:String,
    description:String,
    owner:{type:Schema.Types.ObjectId , ref :"User"},
    date:Date
});
const Todo = mongoose.model('todos',todoSchema);
module.exports = {Todo};