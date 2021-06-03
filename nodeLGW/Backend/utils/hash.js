const bcrypt = require('bcrypt');

/**
 * 字符串加密
 * @param {String} myPlaintextPassword 
 * @returns {String}
 */
const hash = (myPlaintextPassword)=>{
  return new Promise((resolve,reject)=>{
    bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
        if(err){
          reject(err)
        }
        resolve(hash)
    });
  })
}

/**
 * 加密对比
 * @param {String} myPlaintextPassword 
 * @param {String} hash 
 * @returns 
 */
const compare = (myPlaintextPassword,hash)=>{
  return new Promise((resolve,reject)=>{
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
      resolve(result)
    });
  })
}
exports.hash = hash
exports.compare = compare