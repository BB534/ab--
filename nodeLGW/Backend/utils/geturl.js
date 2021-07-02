const PQueue = require("p-queue").default;
const axios = require("axios");
const {hbyTk} = require('./token')

const queue = new PQueue({ concurrency: 10 });
const schedule = require("node-schedule");
const {reptile} = require('./reptile')


// 获取所有工作区的ID
const getTableAll = async()=>{
  hbyTk()

  let tableIdAll = []
  await axios.get('https://api.huoban.com/v2/spaces/joined/group').then((result)=>{
      let getData = result.data['company_spaces']
      getData.forEach((value,index,arr) => {
        let json = {'name':'','id':''}
        let d = value['spaces'][0]['table_ids']
        json.name = value['company']['name']
        
        // if(json.name == 'yxb'){
        //   json.id = d[d.length - 2]
        // }else {
        //   json.id = d[d.length - 1]
        // }
        json.id = d[d.length - 1]
        tableIdAll.push(json)
      });
  }).catch((e =>{
    console.log(e.message);
  }))
  return tableIdAll
}


// 伙伴云协议
const getDataCountAll = async (tableId) =>{
let tbId = 0
let fieldT;
let data;
let url;
let jh = {
  '077':[2200000162300273,2200000162300274,2200000162300275,2200000162300276,2200000162300277,2200000162300278,2200000162300279,2200000162300280,2200000162300282,2200000162300283,2200000162300284,2200000162300285],
  '2':[2200000162791886,2200000162791887,2200000162791888,2200000162791889,2200000162791890,2200000162791891,2200000162791892,2200000162791893,2200000162791896,2200000162791897,2200000162791898,2200000162791899],
  'yxb':[2200000160612473,2200000160612474,2200000160612475,2200000160612476,2200000160612477,2200000160612478,2200000160612479,2200000160612480,2200000160612483,2200000160612484,2200000160612485,2200000160612486]
}
if(tableId['name'] == '077' ){
  fieldT  = jh['077'][0];
  tbId = tableId['id']
  TablName = tableId['name']
  data = {
    where: { and: [{ field:fieldT, query: { eq: "today" } }] },
    offset: 0,
    limit: 20,
  };
}else if(tableId['name'] == '2') {
  fieldT = jh['2'][0];
  tbId = tableId['id']
  TablName = tableId['name']
  data = {
    where: { and: [{ field:fieldT, query: { eq: "today" } }] },
    offset: 0,
    limit: 20,
  };
}else if(tableId['name'] == 'yxb'){
  fieldT = jh['yxb'][0];
  tbId = tableId['id']
  TablName = tableId['name']
  data = {
    where: { and: [{ field:fieldT, query: { eq: "today" } }] },
    offset: 0,
    limit: 20,
  };
}
  let dataCount = 0;
  
  await axios
  .post(`https://api.huoban.com/v2/item/table/${tbId}/find`, data)
  .then((ressult) => {
    dataCount = ressult.data["filtered"];
  })
  .catch(e => {
    console.log(e.message);
  });
let dataSet = {
  data:data,
  tableId:tbId,
  dataCount:dataCount,
  jh:jh
}
return dataSet
}
// getDataCountAll()
// 开始执行同步请求
const getUrl = async ()=>{
let tableId = await getTableAll()
let count = 0
let B = 0
let dataArry = []
let tableIdArry = []
let dataCount=0
let countArry = []
tableId.forEach(async (value) => {
      let dataSet = await getDataCountAll(value)
      B+=1
      countArry.push(dataSet['dataCount'])
      dataCount += dataSet['dataCount']
      dataArry.push(dataSet['data'])
      tableIdArry.push(dataSet['tableId'])
      if(B == 3){
        console.log(countArry);
        reptile(dataArry,tableIdArry,dataCount,countArry,dataSet['jh'])
      }
})
}

exports.getUrl = getUrl
// // 五分钟撞库一次伙伴云
//  const job = schedule.scheduleJob("1 * * * * *", async  function (fireDate) {
//   await getUrl()
//   console.log("开始执行同步数据" +  "执行时间 " + new Date());
// });
