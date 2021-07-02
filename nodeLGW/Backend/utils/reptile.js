const axios = require("axios");
const { screen } = require("./screen");
const hbyModel = require("../models/hby");
const PQueue = require("p-queue").default;
const { hbyTk } = require("./token");
// 并发数量
const queue = new PQueue({ concurrency: 20 });
const reptile = async (dataArry, tableIdArry, dataCount, countArry, jh) => {
  hbyTk();
  const isDataCount = async (dataCount) => {
    let r = await hbyModel.hbyCount();
    console.log(
      `网络数据总和[${dataCount}],本地数据[${r}],相差[${dataCount - r}]`
    );
    if (dataCount - r != 0) {
      console.log("开始同步");
      let rem = await hbyModel.hbyRemove();
      if (rem.ok == 1) {
        console.log("清除历史数据成功");
        let array = [];
        async function PromiseTime(i) {
          let res =  await getData(
            Math.ceil(countArry[i] / 20),
            tableIdArry[i],
            dataArry[i],
            jh
          );
        }
        for (let i = 0; i < countArry.length; i++) {
          array.push(PromiseTime(i))
        }
        Promise.all(array).then((res)=>{
          console.log('成功');
        })
      } else {
        ("清除历史数据失败");
      }
    } else {
      console.log("数据相同,放弃同步");
    }
  };

  const getPage = async (page, tableId, data, jh) => {
    data.offset = page;

    let res = await axios.post(
      `https://api.huoban.com/v2/item/table/${tableId}/find`,
      data
    );
    if (res) {
      queue.add(async () => {
        await screen(res.data, jh)
          .then((res) => {
            Promise.resolve('成功')
          })
          .catch((err) => {
            console.log(err);
          });
      });
    } else {
      console.log("错误");
    }
  };

  let pageAry = [];
  let tttttt = 0;
  const getData = async (page, tableId, data, jh) => {
    for (let i = 0; i < page; i++) {
      queue.add(async () => {
        getPage(i * 20, tableId, data, jh);
      });
    }
  };

  // console.log(pageAry);
  // for (let i = 0; i < page; i++) {
  //     // console.log(tableId);
  //     queue.add(async () => {
  //       let result = await getPage(i * 20,tableId,data,jh);
  //     });
  // }

  isDataCount(dataCount);
};

exports.reptile = reptile;
