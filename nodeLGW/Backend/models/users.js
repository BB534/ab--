const { usersModel } = require('../utils/db') 


// 通过用户名查询用户数据
const usersOne = (username)=>{
  return usersModel.findOne({username})
}
// 添加
const singup = ({username,password}) => {
      const users = new usersModel({
          username,
          password
      })
    return users.save()
}

const userList = ()=>{
  // 查询数据并且倒序
  return usersModel.find().sort({_id:-1})
}

module.exports = {
  singup,
  usersOne,
  userList
}