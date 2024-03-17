import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Connection } from './database/db.js';
import Router from './routes/route.js'

const app = express();
const PORT = 8000;

dotenv.config();

app.use(cors());

app.use('/', Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, ()=>{
    console.log(`server is running on PORT: ${PORT}`);
})