const { verify } = require("../utils/token");
const usersModel = require("../models/users");

const auth = async (req, res, next) => {
  let token = req.get("X-Access-Token");
  try {
    let username = req.get("X-Access-User");
    let isUser = await usersModel.usersOne(username);
    let isToken = verify(token);
    if (isUser) {
      next();
    } else {
      res.render("fail", {
        data: JSON.stringify({
          msg: "无操作权限",
        }),
      });
    }
  } catch (e) {
    res.render("fail", {
      data: JSON.stringify({
        msg: "无权限！",
      }),
    });
  }
};

exports.auth = auth;
