import express from 'express'
import Todo from '../models/task-schema.js'

const router = express.Router();
router.use(express.json());

router.post('/addtask', async(req, res)=>{
    try {
        const data = req.body;
        console.log(data)
        const newTask = new Todo(data);
        await newTask.save();

        res.status(200).json({message: newTask});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/gettask', async(req, res)=>{
    try {
        const data = await Todo.find({});
        res.status(200).json({message: data});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
router.delete('/deletetask/:id', async (req, res) => {
    const taskId = req.params.id;

    try {
        const deletedTask = await Todo.findByIdAndDelete(taskId);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;