const { bilModel } = require("../utils/db");

const bilSave = ({ shop, formula, route, sendout, information }) => {
  return new Promise((resolve, reject) => {
    const bill = new bilModel({
      shop,
      formula,
      route,
      sendout,
      information,
    });
    try {
      let res = bill.save().then()
      if(res){
        resolve(res)
      }
    } catch (error) {
      reject(error)
    }
    
  });
};

const billFineOne = (shop)=>{
  return bilModel.findOne({shop})
}

module.exports = {
  bilSave,
  billFineOne
}
