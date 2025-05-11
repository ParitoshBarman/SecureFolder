const bcrypt = require('bcrypt')
const User = require('../models/userModel')


const Register = async (req, res) => {
    try {
        let bodyObject = req.body;
        bodyObject.password = bcrypt.hashSync(bodyObject.password, 10);

        let user = await User.create(bodyObject);

        res.status(201).json({message:"User successfully registered", user});
        
    } catch (error) {
        res.status(400).json(error);
        
    }
    
}


const Login = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json(error);
        
    }
    
}


module.exports = { Register, Login}