const mongoose = require('mongoose');
const userBackupSchema = new mongoose.Schema({
    UserId: {
        type:mongoose.Types.ObjectId,
        ref:'User',
        require:true
    },
    Title: {
        type: String,
        required: true
    },
    Link: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model("userBackup", userBackupSchema)