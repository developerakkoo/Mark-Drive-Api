const mongoose = require('mongoose');
const fileSchema = new mongoose.Schema({
    UserId: {
        type:mongoose.Types.ObjectId,
        ref:'User',
        require:true
    },
    Title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    keyWords: {
        type: Array,
        required: true
    },
    Link: {
        type: String,
        required: true
    },
    password:{
        type:String,
    },
    downloadCount:{
        type:String,
        require:true,
        default:0
    }
}, {timestamps: true});


module.exports = mongoose.model("File", fileSchema)