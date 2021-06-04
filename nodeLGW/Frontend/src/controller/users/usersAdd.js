import page from "../../databas/page";
import addTpl from "../../views/users-add.art";
import { userAdd as userAddModel } from "../../models/users/add";
// 添加用户
const usersSave = () => {
  $("#users-box").after(addTpl());
  const _save = async () => {
    let data = $("#usersSave-form").serialize();
    let result = await userAddModel(data);
    page.setcurPage(1);
    $("body").trigger("changeUserAdd");
    // 调用close关闭
    const $usersClose = $("#users-close");
    $usersClose.click();
  };

  $("#users-save").on("click", _save);
};

export default usersSave;