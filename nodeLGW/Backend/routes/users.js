var express = require('express');
var userRouter = express.Router();
const { saveController,list,removeId,login,logout,isAuth} = require('../controllers/users')
const { auth } = require('../middleware/auth')

userRouter.post('/userSave',auth,saveController)
userRouter.get('/list',auth,list)
userRouter.delete('/remove',auth,removeId)
userRouter.post('/login',login)
userRouter.get('/logout',auth,logout)
userRouter.get('/isAuth',isAuth)
exports.userRouter = userRouter
