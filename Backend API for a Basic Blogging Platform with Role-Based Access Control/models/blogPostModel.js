const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    content:{
        type:String
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

module.exports = mongoose.model("blogpost", blogPostSchema);