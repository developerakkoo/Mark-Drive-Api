require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');


exports.verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token']
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        })
    }
    
    jwt.verify(token, process.env.SECRET_KEY,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!"
                })
            }
            req.userId  = decoded.userId;
            next()
        })
}

exports.verifyPin = (req, res, next) => {
    let token = req.headers['x-access-token']
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        })
    }
    
    jwt.verify(token, process.env.SECRET_KEY,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!"
                })
            }
            req.userId  = decoded.userId;
            next()
        })
}




//geo based loaction  based