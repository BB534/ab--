var express = require('express');
var hbyRouter = express.Router();

const {hbyControllers,hbyGetDataCount,hbyGetWhere,hbyGetWheresCount} = require('../controllers/hby')

hbyRouter.get('/save',hbyControllers)

hbyRouter.get('/getData',hbyGetDataCount)
hbyRouter.get('/getwhere',hbyGetWhere)
hbyRouter.get('/getwheres',hbyGetWheresCount)

exports.hbyRouter = hbyRouter