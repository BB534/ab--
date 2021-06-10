const PQueue = require("p-queue").default;
const axios = require("axios");


const queue = new PQueue({ concurrency: 10 });
const schedule = require("node-schedule");
const {reptile} = require('./reptile')


// 获取所有工作区的ID
const getTableAll = async()=>{
  axios.interceptors.request.use(
    function (config) {
      // 设置统一的请求头
      config.headers.Authorization =
        "Bearer DRKnzhdStRGfjSlA6ohA17QK2OOQVJn90aRbAt6S001";
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

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
  })
  return tableIdAll
}


// 获取所有数据总和
const getDataCountAll = async (tableId) =>{
let tbId = 0
let fieldT;
let data;
let url;
let jh = {
  '077':[2200000160062353,2200000160062354,2200000160062355,2200000160062356,2200000160062357,2200000160062358,2200000160062359,2200000160062360,2200000160062362,2200000160062363,2200000160062364,2200000160062365],
  '2':[2200000160267291,2200000160267292,2200000160267293,2200000160267294,2200000160267295,2200000160267296,2200000160267297,2200000160267298,2200000160267301,2200000160267302,2200000160267303,2200000160267304],
  'yxb':[2200000160612473,2200000160612474,2200000160612475,2200000160612476,2200000160612477,2200000160612478,2200000160612479,2200000160612480,2200000160612481,2200000160612482,2200000160612483,2200000160612484,2200000160612485,2200000160612486]
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
// 五分钟进行一次撞库
 const job = schedule.scheduleJob("5 * * * * *", async  function (fireDate) {
  await getUrl()
  console.log("开始执行同步数据" +  "执行时间 " + new Date());
});
