import indexTpl from "../views/index.art";
import usersSave from "../controller/users/usersAdd";
import auth from "../models/auth";
import img from '../assets/user.jpg'
const indexRoute = (router) => {
  return async (req, res, next) => {
    let result = await auth();
    if (result.desc) {
      let html = indexTpl({
        subRouter:res.subRoute(),
        img
      })
      next(html);
      $(window, ".wrapper").resize();
      let hash = location.hash
      const $as = $('#sidebar-menu li:not(:first-child) a')
      $as
      .filter(`[href="${hash}"]`)
      .parent()
      .addClass('active')
      .siblings()
      .removeClass('active')
    } else {
      router.go("/singin");
    }
  };
};

export default indexRoute;
