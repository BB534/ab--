var express = require('express');
var hbyRouter = express.Router();

const {hbyControllers,hbyGetDataCount,hbyGetWhere,hbyGetWheresCount,hbyGetComplete} = require('../controllers/hby')

hbyRouter.get('/save',hbyControllers)

hbyRouter.get('/getData',hbyGetDataCount)
hbyRouter.get('/getwhere',hbyGetWhere)
hbyRouter.get('/getwheres',hbyGetWheresCount)
hbyRouter.get('/getexport',hbyGetComplete)

exports.hbyRouter = hbyRouter