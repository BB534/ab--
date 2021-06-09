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


// 伙伴云表格集合
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

// 账单集合

const billSchema = mongoose.Schema({
  shop:{type:String,unique:true},
  formula:{type:String},
  route:{type:String},
  sendout:{type:String},
  information:{type:String}
})

mongoose.set('useCreateIndex', true)
const usersModel = mongoose.model("users", userSchema);
const hbyModel = mongoose.model("hbys",hbySchema)
const bilModel = mongoose.model('bills',billSchema);
module.exports = {
  usersModel,
  hbyModel,
  bilModel
};
