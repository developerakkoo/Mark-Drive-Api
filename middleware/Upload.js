const path = require('path');
const moment = require ('moment');
const multer = require('multer');
const fs = require('fs')
let upload = (folderName) => {
    return imageUpload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
        // console.log(req.query);
        const path = `public/${req.query.FileName ||`New-folder`}/${moment().format('MMMMDoYYYYh-mm-ss-a')}`;
        fs.mkdirSync(path, { recursive: true })
        cb(null, path);
    },

      // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
    })
    })
}

module.exports = upload