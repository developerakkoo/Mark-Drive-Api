const mongoose = require('mongoose');
const mainDirSchema = new mongoose.Schema({
    mainDirName: {
        type:String,
        require:true
    },
    UserId: {
        type:mongoose.Types.ObjectId,
        ref:'User',
        require:true
    },
    path:{
        type:String,
        require:true
    },
    Folders: [{
        folderId:{
            type:mongoose.Types.ObjectId,
            ref: 'Folder'
        }
    }]
}, {timestamps: true});

module.exports = mongoose.model("mainDir", mainDirSchema);



/*
folder operation reference link  

https://www.npmjs.com/package/fs-extra

https://www.npmjs.com/search?q=file%20metadata

https://nodejs.dev/en/learn/working-with-folders-in-nodejs/
*/