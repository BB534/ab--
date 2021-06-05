
let data  = []
for (let key in arr){
  if(key = 'items'){
    data = arr[key]
  }
}

let arry = []
for (let i = 0; i < data.length; i++) {
  arry.push(data[i]['fields'])
}


let json = {}
for (let index = 0; index < arry.length; index++) {
  json['时间'] = arry[index][0]['values'][0]['value']
  json['操作人员'] = arry[index][1]['values'][0]['name']
  json['店铺名'] = arry[index][2]['values'][0]['name']
  json['关键词'] = arry[index][3]['values'][0]['value']
  json['价格'] = arry[index][4]['values'][0]['value']
  json['微信号'] = arry[index][5]['values'][0]['value']
  json['旺旺号'] = arry[index][6]['values'][0]['value']
  json['订单号'] = arry[index][7]['values'][0]['value']
  json['返款人员'] = arry[index][8]['values'][0]['name']
  json['操作微信'] = arry[index][9]['values'][0]['name']
  json['礼品'] = arry[index][10]['values'][0]['name']
  // json['备注'] = arry[index][11]['values'][0]['value']
}