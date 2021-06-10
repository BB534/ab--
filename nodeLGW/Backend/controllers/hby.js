const axios = require("axios");
const { screen } = require("../utils/screen");
const hbyModel = require("../models/hby");
const PQueue = require("p-queue").default;
const {exportTable} = require('../utils/exportTable')
// 并发数量
const queue = new PQueue({ concurrency: 20 });

let data = {
  where: { and: [{ field: 2200000160062353, query: { eq: "today" } }] },
  offset: 0,
  limit: 20,
};

// 爬虫
const hbyControllers = async (req,res,next) => {

};

// 获取总数
const hbyGetDataCount = async (req, res, next) => {
  res.set("content-type", "application/json;charset=UTF-8");
  let dataT = await hbyModel.hbyCount();
  if (dataT) {
    res.render("success", {
      data: JSON.stringify({
        count: dataT,
      }),
    });
  } else {
    res.render("success", {
      data: JSON.stringify({
        count: dataT,
      }),
    });
  }
};


// 根据名称查询对单
const hbyGetWhere = async(req,res,next)=>{
  let {shop} = req.query
  let result = await hbyModel.hbyWhereACount(shop)
  if(result){
    res.send(`${result}`)
  }else {
    res.send('店铺名错误')
  }
}

// 根据名称查询对单
const hbyGetWheresCount = async(req,res,next)=>{
  let {operator,shop} = req.query
  console.log(shop);
  let result = await hbyModel.hbyWhereACounts(operator,shop)
  if(result){
    res.send(`${result}`)
  }else {
    res.send('店铺名错误')
  }
}

// 导出账单
const hbyGetComplete = async (req,res,next)=>{
  // 导出账单时停止定时获取
  let {shop} = req.query
  queue.add (async ()=>{
    await exportTable(shop)
    res.render('success',{
      data:JSON.stringify({
        msg:'成功'
      })
    })
  })
  
}



exports.hbyControllers = hbyControllers;
exports.hbyGetDataCount = hbyGetDataCount;
exports.hbyGetWhere = hbyGetWhere;
exports.hbyGetWheresCount = hbyGetWheresCount
exports.hbyGetComplete = hbyGetComplete 