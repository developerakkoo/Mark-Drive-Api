const mongoose = require('mongoose');
const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    File: {
        type: String,
        required: true
    },
    ComFile: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model("File", fileSchema)