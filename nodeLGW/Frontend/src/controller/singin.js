import singinTpl from '../views/singin.art'
// 登录
const _handleSubmit = (router)=>{
  // 获取事件对象
  return (e)=>{
      // 阻止提交表单默认事件
      e.preventDefault()
      let data = $('#sginSubmit').serialize();
      // 表单请求事件
      $.ajax({
          type:'POST',
          url:'/api/users/login',
          data,
          success:function(data){
              if(data.desc){
                  router.go('/index')
              }
          }
      })
  }
}


// 登录页面
const singinRoute = (router)=>{
  return (req,res,next) => {
      res.render(singinTpl())
       // 绑定点击事件
       $('#sginSubmit').on('submit',_handleSubmit(router))
  }
}

export default singinRoute