import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, ()=>{
    console.log(`server is running on PORT: ${PORT}`);
})