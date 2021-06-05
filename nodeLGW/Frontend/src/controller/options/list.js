import auth from "../../models/auth";
import listTpl from '../../views/options-list.art'
import optionsTpl from '../../views/options.art'
const options = (router) => {
  return async (req, res, next) => {
    let result = await auth();
    if (result.desc) {
      next();
      res.render(optionsTpl());
    } else {
      router.go("/singin");
    }
  };
};

export default options

