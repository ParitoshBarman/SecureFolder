const express = require('express')
const connectDB = require('./config/db');
const Logger = require('./middleware/loggerMiddleware')
const authRoutes = require("./routes/authRoutes")
const blogPostRoutes = require("./routes/blogPostRoutes")


const app = express();
app.use(express.json());
app.use(Logger);

app.use("/auth", authRoutes);
app.use("/posts", blogPostRoutes);


app.get("/", (req, res)=>{    
    res.send("Welcome to the server it is running");
})



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server running on port:', PORT);
    connectDB();
    
})