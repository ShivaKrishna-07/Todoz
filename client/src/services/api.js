import axios from 'axios'

const URL = 'http://localhost:8000';
export const createTask = async(data) => {
    try {
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
export const getOneTask = async(id) => {
    try {
        let res = await axios.get(`${URL}/${id}`);
        return res;
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

export const updateTask = async (data, id) => {
    try {
        await axios.post(`${URL}/updatetask/${id}`, data);
    } catch (error) {
        console.log("Error while calling updateTask api", error.message);
    }
}