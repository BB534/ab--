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

// 列表查询
const userList = ()=>{
  // 查询数据并且倒序
  return usersModel.find().sort({_id:-1})
}

// 删除ID

const remove = id =>{
   return usersModel.deleteOne({_id:id})
}

module.exports = {
  singup,
  usersOne,
  userList,
  remove,
}