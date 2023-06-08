const express =require('express')
const routes = express.Router();
const UserController = require('../controller/user.controller');
const Validate = require('../middleware/userValidate');
const authorize = require('../middleware/authorize-jwt');


routes.post('/signUp',Validate.validateUserCreation,UserController.createUser);

routes.post('/login',UserController.loginUser);

routes.post('/fastAccess/generatePin',authorize.verifyToken,Validate.validateAccessCreation,UserController.fastAccessGeneratePin);

routes.post('/fastAccess/login',UserController.fastAccessLoginUser);

module.exports = {userRoutes : routes}