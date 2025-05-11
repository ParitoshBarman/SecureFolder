const fs = require('fs')

const loger = async (req, res, next) => {
    try {
        console.log()
        next();
        
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};

module.exports = loger;
