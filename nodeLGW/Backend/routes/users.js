var express = require('express');
var userRouter = express.Router();
const { saveController } = require('../controllers/users')

userRouter.post('/userSave',saveController)

exports.userRouter = userRouter
