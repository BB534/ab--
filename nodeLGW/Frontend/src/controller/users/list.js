
import usersTpl from "../../views/users.art";
import usersListTpl from "../../views/users-list.art";
import usersSave from "./usersAdd";
import router from "../../routes";
import toolPage from "../../tools/pageClass";
import page from "../../databas/page";
import { userList as userListModel } from "../../models/users/list";
import { userRemove as userRemoveModel } from "../../models/users/remove";
import auth from "../../models/auth";
const pageSize = 5;
let listData = [];

// 请求数据
const _loadOne = async () => {
  let result = await userListModel();
  if (result.desc) {
    listData = result.data;
    toolPage(listData, pageSize);
    _userList(page.curPage);
  } else {
    router.go("/");
  }
};

// 列表
const _userList = (pageOne) => {
  let start = (pageOne - 1) * pageSize;
  $("#users-list").html(
    usersListTpl({
      data: listData.slice(start, start + pageSize),
    })
  );
};

// 观察者模式通讯
const _subscribe = () => {
  $("body").on("changeCurPage", (e, index) => {
    _userList(page.curPage);
  });

  $("body").on("changeUserAdd", (e) => {
    _loadOne();
  });
};

const _methods = () => {
  // 代理方式绑定删除事件
  $("#users-list").on("click", ".removeId", async function () {
    let result = await userRemoveModel($(this).data("id"));
    if (result.desc) {
      // 计算页码是否是最后一页
      _loadOne();
      let isLastPage = Math.ceil(listData.length / pageSize) === page.curPage;
      let restOne = listData.length % pageSize === 1;
      let notChildPage = page.curPage > 0;
      if (isLastPage && restOne && notChildPage) {
        page.setcurPage(page.curPage - 1);
      }
    }
  });

  //  登出
  $("#user-out").on("click", () => {
    localStorage.setItem("lgw-token", "");
    localStorage.setItem("lgw-user", "");
    location.reload();
  });
};

const userRoute = (router) => {
  const index = (req, res,next) => {
    next()
    res.render(usersTpl())
    $("#usersBtn").on("click", usersSave);
    // 首次渲染
    _loadOne();
    // 绑定事件
    _methods();
    // 订阅事件
    _subscribe();
  };
  return async (req, res, next) => {
    let data = await auth();
    if (data.desc) {
      index(req, res,next);
    } else {
      router.go("/singin");
    }
  };
};

export default userRoute;
