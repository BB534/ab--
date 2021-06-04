import singinTpl from "../views/singin.art";
import singinModel from "../models/singin";

const _handleSubmit = (router) => {
  return async (e) => {
    // 阻止提交表单默认事件
    e.preventDefault();
    let data = $("#sginSubmit").serialize();
    // 表单请求事件
    let { result, jqXHR } = await singinModel(data);
    if (result.desc) {
      localStorage.setItem(
        "lgw-token",
        jqXHR.getResponseHeader("X-Access-Token")
      );
      localStorage.setItem(
        "lgw-user",
        jqXHR.getResponseHeader("X-Access-User")
      );
      $("#login-msg").text(result.data.msg);
      router.go("/index");
    } else {
      $("#login-msg").text(result.err.msg);
      $("#users-pwd").val("");
    }
  };
};

// 登录页面
const singinRoute = (router) => {
  return (req, res, next) => {
    res.render(singinTpl());
    // 绑定点击事件
    $("#sginSubmit").on("submit", _handleSubmit(router));
  };
};

export default singinRoute;
