var express = require('express');
var hbyRouter = express.Router();

const {hbyControllers} = require('../controllers/hby')

hbyRouter.get('/',hbyControllers)

exports.hbyRouter = hbyRouter