var express = require('express');
var billRouter = express.Router();
const {billSave} = require('../controllers/bill')

billRouter.post('/save',billSave)

exports.billRouter = billRouter