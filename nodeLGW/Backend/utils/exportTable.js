const ejsexcel = require("ejsexcel");
const hbyModel = require ('../models/hby')
const bilModel = require('../models/bill')
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const PQueue = require("p-queue").default;
const queue = new PQueue({ concurrency: 20 });
const path = require('path')

const exportTable = async (shop)=>{
  return new Promise(async (resolve,reject)=>{
    //数据源
    let data = []
    let shuju = await hbyModel.hbygetdata(shop)
    if(shuju.length != 0){
      data.push(shuju)
      // 这里是佣金
      let bill = await bilModel.billFineOne(shop)
      if(bill){
        data.push(bill)
      }else {
        data.push({route:'',formula:''})
      }
      let paurl = path.join(__dirname,'tempale',)
      //获得Excel模板的buffer对象
      const exlBuf = await readFileAsync(`${paurl}` + '/tempale.xlsm');
      //用数据源(对象)data渲染Excel模板
      //cachePath 为编译缓存路径, 对于模板文件比较大的情况, 可显著提高运行效率, 绝对路径, 若不设置, 则无缓存
      const exlBuf2 = await ejsexcel.renderExcel(exlBuf, data, { cachePath: `${paurl}` + '/input' });
      const inputPath = `${paurl}`+ `/input/${shop}.xlsm`
      let res = await writeFileAsync(inputPath, exlBuf2);
      resolve('导出成功')
    }else {
      resolve('不存在')
    }
  })
}
// exportTable('TB家奢侈品')


exports.exportTable = exportTable
