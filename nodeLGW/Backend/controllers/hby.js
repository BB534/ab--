const axios = require("axios");
const { screen } = require("../utils/screen");
const hbyControllers = async (req, res, next) => {
  // let where = {
  //   time: "eq:today", // today:今天 昨天:yesterday 明天:tomorrow
  //   order_by: [{ field: 2200000160062357, sort: "asc" }], //field 表格ID
  // };
  let data = {
    where: {
      order_by: [{field: 2200000160062353, sort: "asc"}],
      and: [
        {
          field: 2200000160062353,
          query: {
            eq: "today",
          },
        },
      ],
    },
    offset: 20, // 分页
    limit: 20, // 每页多少条
    order_by: [
      {
        field: 2200000160062353,
        sort: "asc",
      },
    ],
  };

  axios.interceptors.request.use(
    function (config) {
      // 设置统一的请求头
      (config.headers.Authorization =
        "Bearer " + "WN63QH6eqpSHHRIwN4bfNOsp0RNKtpXUmvdohUCV001"),
        (config.headers.cookie =
          "HUOBAN_SESSIONID=4c6847fff276e38bd5cbab994f1b3e53; HUOBAN_SYNC=148eeABMDieocBRlZlJbVW7yYVfb0eevzfiTcBGXW72zwuZdfndYHx3qm2kt8lpg7t4Irh4UYNmu67fFNwIogO7hYK1iJBoqaCDGRpsit5DJJ7YLZn4S2uEJBsSw%2F0c5JImqGeOL; user_id=2608410; access_token=WN63QH6eqpSHHRIwN4bfNOsp0RNKtpXUmvdohUCV001; HUOBAN_AUTH=eb83169100010195a58b7a5ea29b9ee2; HUOBAN_DATA=hNHuCUxISNyweZpeGP7nnzFVRU3mFRd%2FO7P5jZlC9vlu%2BhV9LhIeDwZ%2BOIRLQUp6d0dDVvJHy0SFUatLjEeeOw%3D%3D");
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  let result = axios
    .post("https://api.huoban.com/v2/item/table/2100000016798660/view/0/filter", data)
    .then(async (result) => {
      let json = await screen(result.data);
      res.send(json);
    })
    .catch((err) => {
      // console.log(err.headers);
      console.error(err);
    });
};

exports.hbyControllers = hbyControllers;
