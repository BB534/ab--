const axios = require("axios");
const { screen } = require("../utils/screen");
const  hbyModel = require('../models/hby')
const hbyControllers = async (req, res, next) => {
  res.set("content-type", "application/json;charset=UTF-8");
  axios.interceptors.request.use(
    function (config) {
      // 设置统一的请求头
      (config.headers.Authorization = "Bearer DRKnzhdStRGfjSlA6ohA17QK2OOQVJn90aRbAt6S001" );
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

    let data = {"where":{"and":[{"field":2200000160062353,"query":{"eq":"yesterday"}}]},"offset":0,"limit":20}
    let tableId;
    await axios.get('https://api.huoban.com/v2/spaces/joined?type=all').then((ressult)=>{
      tableId = ressult.data[0]['table_ids']
    })

    tableId  = tableId[tableId.length - 1]
    let dataCount = 0;

    await axios.post(`https://api.huoban.com/v2/item/table/${tableId}/find`,data).then((ressult)=>{
      dataCount = ressult.data['filtered'];
    })
    let pageszie = Math.ceil(dataCount / 20)
    
    async function getPage(page){
        data.offset = page
        let res = await axios.post(`https://api.huoban.com/v2/item/table/${tableId}/find`,data)
        let resdAta = await screen(res.data)
        return resdAta
    }
    
    async function getData(pageszie){
        for (let i = 0; i < pageszie; i++) {
            let result = await getPage( i * 20)
            let r = await screen(result)
        }
    }
    
    let rem = await hbyModel.hbyRemove()
    if(rem){
      getData(pageszie)
    }

  
     let dsq = setInterval(async ()=>{
              let r = await hbyModel.hbyCount()
              if(r == dataCount){
                res.send('抓取成功!' + r + '条')
                clearInterval(dsq)
              }
              
        },300)
};

const hbyGetDataCount = async (req,res,next)=>{
  res.set("content-type", "application/json;charset=UTF-8");
    let dataT = await hbyModel.hbyCount()
    if(dataT){
      res.render("success",{
        data:JSON.stringify({
          count:dataT
        })
      })
    }else{
      res.render("success",{
        data:JSON.stringify({
          count:dataT
        })
      })
    }
   
}

exports.hbyControllers = hbyControllers;
exports.hbyGetDataCount = hbyGetDataCount;
