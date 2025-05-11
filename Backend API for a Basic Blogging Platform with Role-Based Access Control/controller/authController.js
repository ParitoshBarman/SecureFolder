const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
require('dotenv').config();


const Register = async (req, res) => {
    try {
        let bodyObject = req.body;
        bodyObject.password = bcrypt.hashSync(bodyObject.password, 10);

        let user = await User.create(bodyObject);

        res.status(201).json({ message: "User successfully registered", user });

    } catch (error) {
        res.status(400).json(error);

    }

}


const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        let compare = bcrypt.compareSync(password, user.password);
        if (!compare) {
            return res.status(400).json({ error: "Invalid password" })
        }

        let accessToken = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1d' });
        let refreshToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '7d' });

        res.status(200).json({message:"User successfully login", access})
    } catch (error) {
        res.status(400).json(error);

    }

}


module.exports = { Register, Login }