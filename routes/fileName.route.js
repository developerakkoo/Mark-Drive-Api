const express = require('express');
const routes = express.Router();
const upload = require('../middleware/Upload');
const Validate = require('../middleware/validateFile');
const authorize = require('../middleware/authorize-jwt');
const FileController = require('../controller/fileName');

routes.post('/addData',authorize.verifyToken,upload().single("File"),Validate.validateFileUpload,FileController.addFile);



module.exports = {FileRoutes : routes}