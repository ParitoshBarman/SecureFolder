const express = require('express')
const connectDB = require('./config/db');
const { log } = require('console');


const app = express();






const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server running on port:', PORT);
    connectDB();
    
})