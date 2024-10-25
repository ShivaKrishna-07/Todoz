import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.qdkkczv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to the database:", error.message);
    }
};
