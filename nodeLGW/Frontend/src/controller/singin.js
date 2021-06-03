import singinTpl from '../views/singin.art'
import singinModel from '../models/singin'

const _handleSubmit =(router)=>{
  return async (e)=>{
      // 阻止提交表单默认事件
      e.preventDefault()
      let data = $('#sginSubmit').serialize();
      // 表单请求事件
      let result = await singinModel(data)
      if(result.data.desc){
        localStorage.setItem('lgw-token',result.jqXHR.getResponseHeader('X-Access-Token'))
        localStorage.setItem('lgw-user',result.jqXHR.getResponseHeader('X-Access-User'))
        $('#login-msg').text(result.data.data.msg)
        router.go('/index')
      }else{
        $('#login-msg').text(result.data.err.msg)
        $('#users-pwd').val('')
      }
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