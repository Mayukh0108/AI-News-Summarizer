import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
const url = `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/news',async(req,res)=>{
    try{
        const response = await axios.get(url);
        res.json(response.data);
        console.log(response.data);
    } catch(error){
        console.error(error);
    }
    
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})