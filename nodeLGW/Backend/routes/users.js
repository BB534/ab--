var express = require('express');
var userRouter = express.Router();
const { saveController,list,removeId} = require('../controllers/users')


userRouter.post('/userSave',saveController)
userRouter.get('/list',list)
userRouter.delete('/remove',removeId)

exports.userRouter = userRouter
