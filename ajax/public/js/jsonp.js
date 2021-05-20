function jsonp(options){
  // 动态创建js标签
  let script = document.createElement('script');
  // 在windo属性下创建随机函数
  let fnNames = 'myJson' +  Math.random().toString().replace('.','') + new Date().getTime();
  // 将用户函数,写入到windos全局对象属性内,并且调用当前函数
  window[fnNames] = options.success;
  // 将参数拼接
  let  parms = '';
  for(let key in options.data){
    parms += '&' + key + '=' +  options.data[key];
  }
  // 将js的src属性地址改为请求的url地址
  script.src = options.url + '?callback=' + fnNames + parms;
  // 将标签追加到页面元素中
  document.body.appendChild(script);
  // 在js加载完后删除动态标签
  script.onload = function(){
    document.body.removeChild(script);
    
  }
}