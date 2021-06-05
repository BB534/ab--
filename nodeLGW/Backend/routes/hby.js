var express = require('express');
var hbyRouter = express.Router();

const {hbyControllers,hbyGetDataCount} = require('../controllers/hby')

hbyRouter.get('/save',hbyControllers)

hbyRouter.get('/getData',hbyGetDataCount)

exports.hbyRouter = hbyRouter