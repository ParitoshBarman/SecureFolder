const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB is connected");
        
    } catch (error) {
        console.log('MongoDB not conected', error);
        
        
    }
    
}

module.exports = connectDB;