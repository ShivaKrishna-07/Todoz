import mongoose from "mongoose"

export const Connection = async(username, password) => {
    URL = `mongodb+srv://${username}:${password}@cluster0.qdkkczv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error while connecting Database", error.message)
    }
}