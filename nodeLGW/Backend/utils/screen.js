const screen = (result) => {
  return new Promise((resolve, reject) => {
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
    
    let rsArray = [];
    for (let index = 0; index < arry.length; index++) {
        // let count = Number(arry[index].length - 1)
        // let fileid = arry[index][count]['field_id']
        let json = {}
        for (let i = 0; i < arry[index].length; i++) {
          let fileid = arry[index][i]['field_id']
          switch (fileid) {
            case 2200000160062353:
                json['时间'] = arry[index][i]['values'][0]['value']
              break;
            case 2200000160062354:
              json['操作人员'] = arry[index][i]['values'][0]['name']
              break;
              case 2200000160062355:
                json['店铺名'] = arry[index][i]['values'][0]['name']
              break;
              case 2200000160062356:
                json['关键词'] = arry[index][i]['values'][0]['value']
              break;
              case 2200000160062357:
                json['客单价'] = arry[index][i]['values'][0]['value']
              break;
              case 2200000160062358:
                json['微信号'] = arry[index][i]['values'][0]['value']
              break;
              case 2200000160062359:
                json['旺旺名'] = arry[index][i]['values'][0]['value']
              break;
              case 2200000160062360:
                json['订单号'] = arry[index][i]['values'][0]['value']
              break;
              case 2200000160062361:
                json['公众号'] = arry[index][i]['values'][0]['value']
              break;
              case 2200000160062362:
                json['返款人员'] = arry[index][i]['values'][0]['name']
              break;
              case 2200000160062363:
                json['操作微信'] = arry[index][i]['values'][0]['name']
              break;
              case 2200000160062364:
                json['礼品'] = arry[index][i]['values'][0]['name']
              break;
              case 2200000160062365:
                json['备注'] = arry[index][i]['values'][0]['value']
              break;
            default:
              break;
          }
          rsArray.push(json)
        }
    }
    resolve(rsArray)
  });
};


exports.screen = screen