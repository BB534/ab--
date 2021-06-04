import indexTpl from "../views/index.art";
import usersSave from "../controller/users/usersAdd";
import auth from "../models/auth";
const indexRoute = (router) => {
  return async (req, res, next) => {
    let result = await auth();
    if (result.desc) {
      let html = indexTpl({
        subRouter:res.subRoute()
      })
      next(html);
    } else {
      router.go("/singin");
    }
  };
};

export default indexRoute;
