const {verify} = require('../utils/token')

const auth = (req,res,next)=>{
  let token = req.get('X-Access-Token')
  try{
    let isToken = verify(token)
    next()
  }catch(e){
    res.render('fail',{
      data:JSON.stringify({
        msg:'无权限！'
      })
    })
  }
}

exports.auth = auth