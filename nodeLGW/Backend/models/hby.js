const { hbyModel } = require('../utils/db')


// 添加
const saveHby = ({
        date,
        operator,
        shop,
        keyword,
        price,
        wechat,
        taobao,
        order,
        official,
        refund,
        operating,
        gift,
        remarks
}) => {
    const hbys = new hbyModel({
        date,
        operator,
        shop,
        keyword,
        price,
        wechat,
        taobao,
        order,
        official,
        refund,
        operating,
        gift,
        remarks
    });
    return hbys.save();
  };

//   查询总数

const hbyCount = ()=>{
     return new Promise((resolve, reject)=>{
        hbyModel.countDocuments((err,cont)=>{
            if(err){
                reject(err)
            }else{
                resolve(cont)
            }
           
        })
     })
}

const hbyRemove = ()=>{
    return new Promise((resolve, reject)=>{
        hbyModel.deleteMany({},(err,res)=>{
            if(err){
                reject(err)
            }
            resolve(res)
        })
    })
}

module.exports = {
    saveHby,
    hbyCount,
    hbyRemove
}