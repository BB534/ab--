const auth = (req,res,next)=>{
  if(req.session.username){
    next()
  }else{
    res.render('fail',{
      data:JSON.stringify({
        msg:'请登录'
      })
    })
  }
}

exports.auth = auth