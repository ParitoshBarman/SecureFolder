const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author"
    }
})

module.exports = mongoose.model("author", authorSchema);