const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.validateFileUpload = async (req,res,next) => {
    const FileObj = {
        UserId:decoded.UserId,
        Title:req.body.Title,
        subTitle:req.body.subTitle,
        description:req.body.description,
        keyWords:req.body.keyWords,
        File: req.file
    }
    console.log(FileObj)
    if(!FileObj.UserId){
        return res.status(400).json({message:`UserId is require `});
    }
    if(!FileObj.Title){
        return res.status(400).json({message:`Title is require`});
    }
    if(!FileObj.subTitle){
        return res.status(400).json({message:`subTitle is require `});
    }
    if(!FileObj.description){
        return res.status(400).json({message:`description is require `});
    }
    if(!FileObj.File){
        return res.status(400).json({message:`File is require `});
    }
    if(!FileObj.keyWords){
        return res.status(400).json({message:`keyWords is require `});
    }
    next();
}