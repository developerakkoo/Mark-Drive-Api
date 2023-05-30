const compression = require('compression');
const fs = require('fs');
const FileModel = require('../models/file.model');




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
    console.log(req.body);
    const FileObj = {
        name:req.body.name,
        File: req.protocol +"://"+req.hostname +"/"+req.file.path.replace(/\\/g, "/"),
        ComFile:`compressed_${req.protocol +"://"+req.hostname +"/"+req.file.path.replace(/\\/g, "/")}`
    }

    try{
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