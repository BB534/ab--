const bilModel = require('../models/bill')

const billSave = async (req,res,next) => {
  let {shop,formula,route,sendout,information} = req.body
  
  try {
    await bilModel.bilSave({shop,formula,route,sendout,information})
    res.render('success',{
      data:JSON.stringify({
        msg:'添加成功'
      })
    })
  } catch (error) {
    res.render('fail',{
      data:JSON.stringify({
        msg:'已存在,请勿重复添加'
      })
    })
  }
}



module.exports = {
  billSave
}