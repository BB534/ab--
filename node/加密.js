const crypto = require('crypto')

let pwd = 'abg123gas'

const hash = crypto.createHmac('sha256',pwd)
              .update(pwd)
              .digest('hex')

console.log(hash);