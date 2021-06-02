const bcrypt = require('bcrypt');

/**
 * 通过字符串加密
 * @param {String} myPlaintextPassword 
 * @returns {String} hash
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


const compare = (myPlaintextPassword,hash)=>{
  return new Promise((resolve,reject)=>{
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
      resolve(result)
    });
  })
}
exports.hash = hash
exports.compare = compare