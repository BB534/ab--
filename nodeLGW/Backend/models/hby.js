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
})=>{
    return new Promise((reslove,reject)=>{
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
       let res =  hbys.save();
        if(res){
            reslove(res)
        }
    })
}

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


const hbyFindOne = (taobao)=>{
    return hbyModel.findOne({taobao})
}

const  hbyWhereACount = (where)=>{
    return new Promise((resolve, reject)=>{
        hbyModel.where({shop:where}).countDocuments((err,cont)=>{
            if(err){
                reject(err)
            }else{
                resolve(cont)
            }
           
        })
    })
}

module.exports = {
    saveHby,
    hbyCount,
    hbyRemove,
    hbyFindOne,
    hbyWhereACount
}