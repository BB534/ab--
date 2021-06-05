
const hbyModel = require('../models/hby')

const screen = async (result) => {
    let data = [];
    
    for (let key in result) {
      if ((key = "items")) {
        data = result[key];
      }
    }
    let arry = [];
    for (let i = 0; i < data.length; i++) {
      arry.push(data[i]["fields"]);
    }
    // console.log(arry[0]);
    const pushJson = async (json)=>{
        await hbyModel.saveHby(json)
    }
    for (let index = 0; index < arry.length; index++) {
      // let count = Number(arry[index].length - 1)
      // let fileid = arry[index][count]['field_id']
      let json = {}
      for (let i = 0; i < arry[index].length; i++) {
        let fileid = arry[index][i]['field_id']
        switch (fileid) {
          case 2200000160062353:
              json['date'] = arry[index][i]['values'][0]['value']
            break;
          case 2200000160062354:
            json['operator'] = arry[index][i]['values'][0]['name']
            break;
            case 2200000160062355:
              json['shop'] = arry[index][i]['values'][0]['name']
            break;
            case 2200000160062356:
              json['keyword'] = arry[index][i]['values'][0]['value']
            break;
            case 2200000160062357:
              json['price'] = arry[index][i]['values'][0]['value']
            break;
            case 2200000160062358:
              json['wechat'] = arry[index][i]['values'][0]['value']
            break;
            case 2200000160062359:
              json['taobao'] = arry[index][i]['values'][0]['value']
            break;
            case 2200000160062360:
              json['order'] = arry[index][i]['values'][0]['value']
            break;
            case 2200000160062361:
              json['official'] = arry[index][i]['values'][0]['value']
            break;
            case 2200000160062362:
              json['refund'] = arry[index][i]['values'][0]['name']
            break;
            case 2200000160062363:
              json['operating'] = arry[index][i]['values'][0]['name']
            break;
            case 2200000160062364:
              json['gift'] = arry[index][i]['values'][0]['name']
            break;
            case 2200000160062365:
              json['remarks'] = arry[index][i]['values'][0]['value']
            break;
          default:
            break;
        }
      }
      pushJson(json)
    }
};


exports.screen = screen