const compression = require('compression');
const fs = require('fs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const FileModel = require('../models/file.model');
const User = require('../models/user.model');




async function filName(req,res){
    const folderName = req.body.folderName || "New folder";

try {
    if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    res.status(201).json({msg:"folder created successfully"});
    }
} catch (err) {
    console.error(err);
}
}




async function addFile(req,res){
    try{
        let token = req.headers['x-access-token'];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(req.body);
    const FileObj = {
        UserId:decoded.UserId,
        Title:req.body.Title,
        subTitle:req.body.subTitle,
        description:req.body.description,
        keyWords:req.body.keyWords,
        Link: req.protocol +"://"+req.hostname +"/"+req.file.path.replace(/\\/g, "/")
    }
        const  savedData=  await FileModel.create(FileObj);
        res.status(200).json({message:`Data Created successfully`,savedData})
    }catch(err){
        console.log(err.message)
        res.status(500).json({message: `Some internal error while inserting the element ${err.message}`});
    }
}


module.exports = {
    filName,
    addFile
    
}