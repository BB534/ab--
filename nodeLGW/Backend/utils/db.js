const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/lgw-admin',
{ 
  useNewUrlParser: true,
  useUnifiedTopology:true 
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

// 创建用户集合
const userSchema = mongoose.Schema({
  username:String,
  password:String
})


const usersModel = mongoose.model('users',userSchema)

module.exports = {
  usersModel
}
