var express = require('express');
var hbyRouter = express.Router();

const {hbyControllers,hbyGetDataCount,hbyGetWhere,hbyGetWheresCount,hbyGetComplete,hbytbdata} = require('../controllers/hby')

hbyRouter.get('/save',hbyControllers)

hbyRouter.get('/getData',hbyGetDataCount)
hbyRouter.get('/getwhere',hbyGetWhere)
hbyRouter.get('/getwheres',hbyGetWheresCount)
hbyRouter.get('/getexport',hbyGetComplete)
hbyRouter.get('/hbytbdata',hbytbdata)
exports.hbyRouter = hbyRouter