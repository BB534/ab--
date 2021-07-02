const e = require("express");
const hbyModel = require("../models/hby");
const PQueue = require("p-queue").default;
const queue = new PQueue({ concurrency: 20 });
const screen = async (result, jh) => {
  queue.add(async () => {
    let data = [];
    for (let key in result) {
      if ((key = "items")) {
        data = result[key];
      }
    }
    // 开始分离数据
    let arry = [];
    await data.forEach((value, index, arr) => {
      arry.push(value["fields"]);
    });
    // 往数据库中加数据
    const pushJson = async (json) => {
      return new Promise(async (reslove, reject) => {
        let res = await hbyModel.saveHby(json);
        if (res) {
          reslove({
            value: res,
            done: false,
          });
        } else {
          reject({
            value: res,
            done: true,
          });
        }
      });
    };
    let then = [];
    queue.add(async () => {
      for (let index = 0; index < arry.length; index++) {
        queue.add(async () => {
          let json = {
            date: "",
            operator: "",
            shop: "",
            keyword: "",
            price: "",
            wechat: "",
            taobao: "",
            order: "",
            refund: "",
            operating: "",
            gift: "",
            remarks: "",
          };
          for (let i = 0; i < arry[index].length; i++) {
            let fileid = arry[index][i]["field_id"];
            switch (fileid) {
              case jh["077"][0]:
                json["date"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["2"][0]:
                json["date"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["yxb"][0]:
                json["date"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["077"][1]:
                json["operator"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["2"][1]:
                json["operator"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["yxb"][1]:
                json["operator"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["077"][2]:
                json["shop"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["2"][2]:
                json["shop"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["yxb"][2]:
                json["shop"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["077"][3]:
                json["keyword"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["2"][3]:
                json["keyword"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["yxb"][3]:
                json["keyword"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["077"][4]:
                json["price"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["2"][4]:
                json["price"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["yxb"][4]:
                json["price"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["077"][5]:
                json["wechat"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["2"][5]:
                json["wechat"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["yxb"][5]:
                json["wechat"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["077"][6]:
                json["taobao"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["2"][6]:
                json["taobao"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["yxb"][6]:
                json["taobao"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["077"][7]:
                json["order"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["2"][7]:
                json["order"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["yxb"][7]:
                json["order"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["077"][9]:
                json["refund"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["2"][10]:
                json["refund"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["yxb"][10]:
                json["refund"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["077"][10]:
                json["operating"] = arry[index][i]["values"][0]["name"];
                break;
                json["operating"] = arry[index][i]["values"][0]["name"];
              case jh["2"][11]:
                break;
                json["operating"] = arry[index][i]["values"][0]["name"];
              case jh["yxb"][11]:
                break;
              case jh["077"][11]:
                json["gift"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["2"][12]:
                json["gift"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["yxb"][12]:
                json["gift"] = arry[index][i]["values"][0]["name"];
                break;
              case jh["077"][3]:
                json["remarks"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["2"][3]:
                json["remarks"] = arry[index][i]["values"][0]["value"];
                break;
              case jh["yxb"][3]:
                json["remarks"] = arry[index][i]["values"][0]["value"];
                break;
            }
          }
          then.push(pushJson(json));
        });
      }
    });
  });
  Promise.resolve('成功')
};

exports.screen = screen;
