import auth from "../../models/auth"; // 鉴权
import optionsTpl from '../../views/options.art' // 职位模板
import Addmodal from '../../views/options-add.art' // 模态框
import toolPage from '../../tools/pageClass' // 分页

const options = (router) => {
  return async (req, res, next) => {
    let result = await auth();
    if (result.desc) {
      next();
      res.render(optionsTpl());
      $('#options-box').after(Addmodal())
      let data = ['a','b','c','d']
      toolPage(data,10)
    } else {
      router.go("/singin");
    }
  };
};

export default options

