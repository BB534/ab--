const usersModel = require("../models/users");
const { hash } = require('../utils/hash')
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

// 删除用户
module.exports = {
  saveController,
  list,
  removeId
};
