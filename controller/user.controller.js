const User = require('../models/user.model');
const mainDir = require('../models/mainDir.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
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
    const folderPath = `public/${createdUser.name}`;

        if (!fs.existsSync(folderPath)) {
        fs.mkdir(folderPath,(err) =>{
            if(err){
                console.log(err);
            }
            console.log("mainDir created successfully");
        });
        }
        const dirObj ={
            mainDirName:createdUser.name,
            UserId :createdUser._id,
            path:req.protocol +"://"+req.hostname +"/"+folderPath.replace(/\\/g, "/")
        }
    const createdDir = await mainDir.create(dirObj);
    res.status(201).json({message:`User created Successfully`,User:postRes,mainDir:createdDir})
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

exports.fastAccessGeneratePin = async (req,res) => {
    try     {    
        const email = req.body.email
        const password = req.body.password
        const pin = await bcrypt.hash(req.body.PIN,10)
        const savedUser = await User.findOne({email:email});
        if(!savedUser){
            return res.status(404).json({message:`User not found with this email ${req.body.email}`})
        }
        if(!(await bcrypt.compare(password, savedUser.password))){
            return res.status(401).json({message:`Incorrect Password`});
        }
        
        savedUser.Pin = pin != undefined
        ? pin
        :  savedUser.Pin 
        await savedUser.save();
        res.status(201).json({message:`Fast Access Activated Now You Can Use 4 Digit Pin To Login `});
    }catch(error){
        res.status(500).json({status:'ERROR',Message:error.message});
    }
}


exports.fastAccessLoginUser = async (req,res) => {
    try     {    
        const email = req.body.email
        const pin = req.body.PIN
        const savedUser = await User.findOne({email:email});
        if(!savedUser){
            return res.status(404).json({message:`User not found with this email ${req.body.email}`})
        }
        if(!(await bcrypt.compare(pin, savedUser.Pin))){
            return res.status(401).json({message:`Incorrect Pin`});
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
        console.log(error);
        res.status(500).json({status:'ERROR',Message:error.message});
    }
}