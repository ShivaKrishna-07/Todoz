import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: { 
        type: String, 
    }, 
    status: { 
        type: String,
    }, 
    deadline: { 
        type: Date, 
    }, 
})

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;