const usersModel = require("../models/users");

const saveController = async (req, res, next) => {
  let { username, password } = req.body;

  let usersData = await usersModel.usersOne(username);
  if (usersData) {
    // 用户存在
    res.render("fail", {
      err: "用户名已存在",
    });
  } else {
    let data = await usersModel.singup({
      username,
      password,
    });

    res.render("success", {
      data: data,
    });
  }
};

module.exports = {
  saveController,
};
