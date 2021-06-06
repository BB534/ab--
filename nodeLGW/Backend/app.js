var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cookieSession = require("cookie-session");
const axios = require("axios");
const http = require("http");

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



const getUrl = async () => {
  let data = {
    where: { and: [{ field: 2200000160062353, query: { eq: "today" } }] },
    offset: 0,
    limit: 20,
  };

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

  let tableId;
  await axios
    .get("https://api.huoban.com/v2/spaces/joined?type=all")
    .then((ressult) => {
      tableId = ressult.data[0]["table_ids"];
    });
  tableId = tableId[tableId.length - 1];

  let dataCount = 0;
  await axios
    .post(`https://api.huoban.com/v2/item/table/${tableId}/find`, data)
    .then((ressult) => {
      dataCount = ressult.data["filtered"];
    });

  await axios.get(
    `http://localhost:3000/api/hby/save?tableId=${tableId}&dataCount=${dataCount}`
  );
};


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


// 5分钟执行一次
const job = schedule.scheduleJob("3 * * * * *", function (fireDate) {
  getUrl()
  console.log("开始执行同步数据" + fireDate + "执行时间 " + new Date());
});


module.exports = app;
