import axios from 'axios'

const URL = 'http://localhost:8000';
export const createTask = async(data) => {
    try {
        console.log(data);
        return await axios.post(`${URL}/addtask`, data);
    } catch (error) {
        console.log("Error while calling AddTask api", error.message);
    }
}
export const getTask = async() => {
    try {
        return await axios.get(`${URL}/gettask`);
    } catch (error) {
        console.log("Error while calling getTask api", error.message);
    }
}
export const deleteTask = async(id) => {
    try {
        await axios.delete(`${URL}/deletetask/` + id);
    } catch (error) {
        console.log("Error while calling getTask api", error.message);
    }
}