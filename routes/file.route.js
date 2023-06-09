const express = require('express');
const routes = express.Router();
const upload = require('../middleware/Upload');
const Validate = require('../middleware/validateFile');
const authorize = require('../middleware/authorize-jwt');
const FileController = require('../controller/file');

routes.post('/addData',authorize.verifyToken,upload().single("File"),Validate.validateFileUpload,FileController.addFile);

routes.post('/ShareLink/:id',FileController.handelFileSharing);

routes.post('/backup',authorize.verifyPin,upload().single("File"),FileController.backupData);

routes.put('/markAsFavorite/:id',FileController.markAsFavorite);





module.exports = {FileRoutes : routes}