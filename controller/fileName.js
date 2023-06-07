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
    console.log("ct");
    try{
    const FileObj = {
        UserId:req.body.Id,
        Title:req.body.Title,
        subTitle:req.body.subTitle,
        description:req.body.description,
        keyWords:req.body.keyWords,
        Link: req.protocol +"://"+req.hostname +"/"+req.file.path.replace(/\\/g, "/")
    }
    const savedUser = await  User.findOne({_id:req.body.Id});
    if(!savedUser){
        return res.status(400).json({message:`User Not Fount  With This User Id: ${req.body.Id}`});
    }
    // const remainingQuota =   1024 * 1024 * 1024 - savedUser.storageUsage;531287817
    // console.log(req.file.size);
    // console.log("msl",maxStorageLimit)
    const maxStorageLimit = 1073741824/ Math.pow(1024, 3) //1GB 1073741824
    if (maxStorageLimit <=  savedUser.storageUsage +req.file.size / Math.pow(1024, 3)) {
        return res.status(400).json({ message: `You Don't Have Enough Storage To Upload this File (You can upload file upto your max storage limit  to yor drive please check your drive storage) ` });
    }
    if (maxStorageLimit <=  savedUser.storageUsage) {
        return res.status(400).json({ message: 'Storage Limit Exceeding Please Check Your Storage Limit' });
    }
        savedUser.storageUsage += req.file.size / Math.pow(1024, 3);
        const updatedUser = await savedUser.save()
        const  savedData=  await FileModel.create(FileObj);
        res.status(200).json({message:`File Uploaded successfully`,savedData,storageUsage:updatedUser.storageUsage})
    }catch(err){
        console.log(err)
        res.status(500).json({message: `Some internal error while inserting the element ${err.message}`});
    }
}
//fast access pin 4 digit pin

module.exports = {
    filName,
    addFile
    
}


/*
1)Star or mark as important or favorite
2) password-protected shareable link(need password to download the file) or without password
*/