const fs = require('fs')
const path = require('path')

const loger = async (req, res, next) => {
    try {
        console.log(req.method, req.url, Date.now())
        // fs.appendFileSync()
        console.log(__dirname)
        next();
        
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};

module.exports = loger;
