const express = require('express');
const routes = express.Router();
const upload = require('../middleware/Upload');
const FileController = require('../controller/fileName');

routes.post('/addData',upload().single("File"),FileController.addFile);



module.exports = {FileRoutes : routes}