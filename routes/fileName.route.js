const express = require('express');
const routes = express.Router();
const upload = require('../middleware/Upload');
const Validate = require('../middleware/validateFile');
const authorize = require('../middleware/authorize-jwt');
const FileController = require('../controller/Drive');

routes.post('/addData',authorize.verifyPin,upload().single("File"),Validate.validateFileUpload,FileController.addFile);



routes.post('/backup',authorize.verifyPin,upload().single("File"),FileController.backupData);




module.exports = {FileRoutes : routes}