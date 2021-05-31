var express = require('express');
var userRouter = express.Router();
const { saveController,list } = require('../controllers/users')

userRouter.post('/userSave',saveController)
userRouter.get('/list',list)

exports.userRouter = userRouter
