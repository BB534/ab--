const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
/**
 * 加密
 * @param {Object} key
 */
exports.private = (key) => {
  let privateKey = fs.readFileSync(
    path.join(__dirname, "../key/rsa_private_key.pem")
  );
  let token = jwt.sign(key, privateKey, { algorithm: "RS256" });
  return token;
};

/**
 * 解密
 * @param {String} token
 * @returns {String}|
 */
exports.verify = (token) => {
  let verifyKey = fs.readFileSync(
    path.join(__dirname, "../key/rsa_public_key.pem")
  );
  let result = jwt.verify(token, verifyKey, { algorithm: "RS256" });
  return result;
};


exports.hbyTk = ()=>{
  axios.interceptors.request.use(
    function (config) {
      // 设置统一的请求头
      config.headers.Authorization =
        "Bearer KvGvMPgIcSePBEzpF73wW7OAgY24XdcHFc9XBFts001";
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
}
