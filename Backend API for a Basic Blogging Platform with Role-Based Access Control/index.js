const express = require('express')
const connectDB = require('./config/db');
const { log } = require('console');


const app = express();
app.use(express.json());


app.get("/", (req, res)=>{
    console.log(req);
    
    res.send("Welcome to the server it is running");
})



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server running on port:', PORT);
    connectDB();
    
})