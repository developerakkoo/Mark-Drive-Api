const express =require('express')
const routes = express.Router();
const UserController = require('../controller/user.controller');
const Validate = require('../middleware/userValidate');


routes.post('/signUp',Validate.validateUserCreation,UserController.createUser);

routes.post('/login',UserController.loginUser);

module.exports = {userRoutes : routes}