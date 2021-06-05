const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/lgw-admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

// 创建用户集合
const userSchema = mongoose.Schema({
  username: String,
  password: String,
});


const hbySchema = mongoose.Schema({
  date:String,
  operator:String,
  shop:String,
  keyword:String,
  price:String,
  wechat:String,
  taobao:String,
  order:String,
  official:String,
  refund:String,
  operating:String,
  gift:String,
  remarks:String,
})
const usersModel = mongoose.model("users", userSchema);
const hbyModel = mongoose.model("hbys",hbySchema)
module.exports = {
  usersModel,
  hbyModel
};
