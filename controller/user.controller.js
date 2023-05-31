const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.createUser = async (req,res)=>{

try {    const userData = {
        name : req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password,10)
    }
    const checkUser =  await User.findOne({email:req.body.email});
    if(checkUser){
        return res.status(202).json({message:`User Already Exist with Email ${req.body.email} Please With Different Email `})
    }
    const createdUser = await User.create(userData);
    postRes = {
        name : createdUser.name,
        email: createdUser.email,
        
    }
    res.status(201).json({message:`User created Successfully`,postRes})
    }catch(error){
        res.status(500).json({status:'ERROR',message:error.message})
    }
}

exports.loginUser = async (req,res) => {
    try     {    
        const email = req.body.email
        const password = req.body.password
        const savedUser = await User.findOne({email:email});
        if(!savedUser){
            return res.status(404).json({message:`User not found with this email ${req.body.email}`})
        }
        if(!(await bcrypt.compare(password, savedUser.password))){
            return res.status(401).json({message:`Incorrect Password`});
        }
        const payload = {
            userId: savedUser._id,
            email:  savedUser.email 
        }
        const token = await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '24h'});
        const postRes = {
            User : savedUser.name,
            Id:savedUser._id,
            accessToken : token
        }
        res.status(202).json({message:`User login successfully`,postRes});
    }catch(error){
        res.status(500).json({status:'ERROR',Message:error.message});
    }
}