var express = require('express');
var hbyRouter = express.Router();

const {hbyControllers,hbyGetDataCount,hbyGetWhere} = require('../controllers/hby')

hbyRouter.get('/save',hbyControllers)

hbyRouter.get('/getData',hbyGetDataCount)
hbyRouter.get('/getwhere',hbyGetWhere)

exports.hbyRouter = hbyRouter