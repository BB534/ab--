var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cookieSession = require("cookie-session");
const axios = require("axios");
const http = require("http");
const PQueue = require("p-queue").default;
const schedule = require("node-schedule");

var app = express();

const { userRouter } = require("../Backend/routes/users");
const { hbyRouter } = require("./routes/hby");
// 模板引擎设置
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


// 设置api请求拦截中间件
app.use("/api/users", userRouter);
app.use("/api/hby", hbyRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});






const queue = new PQueue({ concurrency: 10 });


// 获取所有工作区的ID
const getTableAll = async()=>{
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
  
    let tableIdAll = []
    await axios.get('https://api.huoban.com/v2/spaces/joined/group').then((result)=>{
        let getData = result.data['company_spaces']
        getData.forEach((value,index,arr) => {
          let json = {'name':'','id':''}
          let d = value['spaces'][0]['table_ids']
          json.name = value['company']['name']
          json.id = d[d.length - 1]
          tableIdAll.push(json)
        });
    })
    return tableIdAll
}

const getDataCountAll = async (tableId) =>{
  let tbId = 0
  let field;
  let data = {
    where: { and: [{ field:`${field}`, query: { eq: "today" } }] },
    offset: 0,
    limit: 20,
  };
  let jh = {
    '077':[
        2200000160062353,
        2200000160062354,
        2200000160062355,
        2200000160062356,
        2200000160062357,
        2200000160062358,
        2200000160062359,
        2200000160062360,
        2200000160062362,
        2200000160062363,
        2200000160062364,
        2200000160062365
      ],
    '2':[
      2200000160267291,
      2200000160267292,
      2200000160267293,
      2200000160267294,
      2200000160267295,
      2200000160267296,
      2200000160267297,
      2200000160267298,
      2200000160267301,
      2200000160267302,
      2200000160267303,
      2200000160267304
    ],
    'yxb':[
      2200000158253111,
      2200000158253112,
      2200000158253113,
      2200000158253114,
      2200000158253115,
      2200000158253116,
      2200000158253117,
      2200000158253118,
      2200000158253121,
      2200000158253122,
      2200000158253123,
      2200000158253124
    ]
  }

  switch (tableId['name']) {
    case '077':
      field  = jh['077'][0];
      tbId = tableId['id']
      break;
    case '2':
      field = jh['2'][0];
      tbId = tableId['id']
      break;
    case 'yxb':
      field = jh['yxb'][0];
      tbId = tableId['id']
      break;
  }
    let dataCount = 0;
    await axios
    .post(`https://api.huoban.com/v2/item/table/${tbId}/find`, data)
    .then((ressult) => {
      dataCount = ressult.data["filtered"];
    });
  
  // return dataCount
}


const tt = async ()=>{
  let tableId = await getTableAll()
  tableId.forEach(value => {
      queue.add(async ()=>{
        let dataCount = await getDataCountAll(value)
        console.log(dataCount);
      })
  })
}



const getUrl = async () => {

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

  let tableId = await getTableAll()
  tableId.forEach(value => {
    queue.add(async ()=>{
      let dataCount = await getDataCountAll(value)
    })
  })
  
  await axios.get(
    `http://localhost:3000/api/hby/save?tableId=${tableId}&dataCount=${dataCount}`
  );
};




tt()

// // 5分钟执行一次
// const job = schedule.scheduleJob("3 * * * * *", function (fireDate) {
//   getUrl()
//   console.log("开始执行同步数据" + fireDate + "执行时间 " + new Date());
// });


module.exports = app;
