const mongoose = require('mongoose');
const mainDirSchema = new mongoose.Schema({
    FolderName: {
        type:String,
        require:true
    },
    UserId: {
        type:mongoose.Types.ObjectId,
        ref:'User',
        require:true
    },
    mainDirId: {
        type:mongoose.Types.ObjectId,
        ref:'mainDir',
        require:true
    },
    Items: [{
        folderId:{
            type:mongoose.Types.ObjectId,
            ref: 'File'
        }
    }]
}, {timestamps: true});

module.exports = mongoose.model("mainDir", mainDirSchema);