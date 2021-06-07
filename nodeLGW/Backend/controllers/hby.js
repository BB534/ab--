const axios = require("axios");
const { screen } = require("../utils/screen");
const hbyModel = require("../models/hby");
const PQueue = require("p-queue").default;

// 并发数量
const queue = new PQueue({ concurrency: 20 });

let data = {
  where: { and: [{ field: 2200000160062353, query: { eq: "today" } }] },
  offset: 0,
  limit: 20,
};

// 爬虫
const hbyControllers = async (dataSet) => {

  res.set("content-type", "application/json;charset=UTF-8");
  let { dataCount, tableId } = req.query;
  axios.interceptors.request.use(
    function (config) {
      // 设置统一的请求头
      config.headers.Authorization =
        "Bearer DRKnzhdStRGfjSlA6ohA17QK2OOQVJn90aRbAt6S001";
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  let pageszie = Math.ceil(dataCount / 20);
  console.log(pageszie);
  const getPage = async (page) => {
    console.log("获取数据" + page);
    data.offset = page;
    let res = await axios.post(
      `https://api.huoban.com/v2/item/table/${tableId}/find`,
      data
    );
    let resdAta = await screen(res.data);
    return resdAta;
  };

  const getData = (pageszie) => {
    console.log("获取数据");

    for (let i = 0; i < pageszie; i++) {
      queue.add(async () => {
        let result = await getPage(i * 20);
        await screen(result);
      });
    }
  };

  const isDataCount = async () => {
    let r = await hbyModel.hbyCount();
    console.log(dataCount,r);
    if (dataCount > r) {
      console.log("开始抓取");
      let rem = await hbyModel.hbyRemove();
      if (rem) {
        console.log("删成功");
        getData(pageszie);
      }
      let dsq = setInterval(async () => {
        let r = await hbyModel.hbyCount();
        if (r == dataCount) {
          console.log("获取完毕");
          clearInterval(dsq);
        }
      }, 1000);
    } else {
      console.log("无需重复抓取");
    }
  };

  isDataCount();
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
  console.log(shop);
  let result = await hbyModel.hbyWhereACount(shop)
  if(result){
    res.send(`${result}`)
  }
}

exports.hbyControllers = hbyControllers;
exports.hbyGetDataCount = hbyGetDataCount;
exports.hbyGetWhere = hbyGetWhere;
