const usersModel = require("../models/users");
const { hash,compare } = require('../utils/hash')
const { private,verify} = require('../utils/token')
// 添加用户
const saveController = async (req, res, next) => {
  res.set('content-type','application/json;charset=UTF-8')
  let { username, password } = req.body;

  let usersData = await usersModel.usersOne(username);
  let hashPwd = await hash(password)
  if (usersData) {
    // 用户存在
    res.render("fail", {
      data: JSON.stringify({
        msg:"用户名已存在！"
      })
    });
  } else {
    let data = await usersModel.singup({
      username,
      password:hashPwd
    });

    res.render("success", {
      data: JSON.stringify({
        msg:"注册成功"
      })
    });
  }
};

// 获取用户列表
const list = async (req,res,next) => {
  res.set('content-type','application/json;charset=UTF-8')
  let result = await usersModel.userList()
  res.render('success',{
    data:JSON.stringify(result)
  })
}
const removeId = async (req,res,next) => {
  res.set('content-type','application/json;charset=UTF-8')
  let { id } = req.body
  let result = await usersModel.remove(id)
  console.log(result);
  if(result.n == 1){
    res.render('success',{
      data:JSON.stringify({
        msg:'删除成功!'
      })
    })
  }else{
    res.render('fail',{
      data:JSON.stringify({
        msg:'删除失败!'
      })
    })
  }
  
}


const login = async (req,res,next)=>{
  res.set('content-type','application/json; charset=utf-8')
  let {username,password} = req.body
  let result = await usersModel.usersOne(username)
  if(result){
    let isLogin = await compare(password,result.password)
    if(isLogin){
      let token = private({username:username})
      res.set('X-Access-Token',token)
      res.set('X-Access-User',username)
      res.render('success',{
        data:JSON.stringify({
          msg:'登录成功'
        })
      })
    }else{
      res.render('fail',{
        data:JSON.stringify({
          msg:'账号或密码错误'
        })
      })
    }
  }else{
    res.render('fail',{
      data:JSON.stringify({
        msg:'用户不存在'
      })
    })
  }
}


const isAuth  = async (req,res,next) =>{
    res.set('content-type','application/json;charset=UTF-8')
    try {
      let token = req.get('X-Access-Token')
      let username = req.get('X-Access-User')
      let isUser = usersModel.usersOne(username)
      let isToken = verify(token)
      if(isUser){
          res.render('success',{
            data:JSON.stringify({
              username:isToken.username
            })
        })
      }
    } catch (error) {
        res.render('fail',{
          data:JSON.stringify({
            msg:'请登录'
          })
        })
    }
}


module.exports = {
  saveController,
  list,
  removeId,
  login,
  isAuth
};
