const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

// 暴露模块
module.exports = {
  // 配置编译环境 生产 production 开发 development
  mode:'development',
  // 创建sourceMap
  devtools:'source-map',
  // 配置入口
  entry:{
    app:'./src/app.js'
  },
  // 配置出口
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'app.js'
  },
  // 配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'./public/index.html'),
      filename:'index.html',
      inject:true,
    }),
    new CopyPlugin({
      patterns:[
        // { from: "source", to: "dest" },
      ]
    })
  ],
  // 配置启动服务
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 3381,
  },
}