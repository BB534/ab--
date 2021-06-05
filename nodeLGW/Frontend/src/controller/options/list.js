import auth from "../../models/auth";
const options = (router) => {
  return async (req, res, next) => {
    let result = await auth();
    if (result.desc) {
      next();
      res.render("options");
    } else {
      router.go("/singin");
    }
  };
};

export default options

