import indexTpl from '../views/index.art'
import singinTpl from '../views/singin.art'
import usersTpl from '../views/users.art'
const htmlIndex = indexTpl({})
const htmlSingin = singinTpl({})

const _handleSubmit = (router)=>{
    // 获取事件对象
    return (e)=>{
        // 阻止提交表单默认事件
        e.preventDefault()
        router.go('/index')
    }
}
const indexRoute = (router)=>{
    return (req,res,next) => {
        res.render(htmlIndex)
        // 调用window.resize，让页面撑满整个屏幕
        $(window,'.wrapper').resize()
        let usersHtml = usersTpl()
        $('.content').html(usersHtml)
    }
}

// 登录页面
const singinRoute = (router)=>{
    return (req,res,next) => {
        res.render(htmlSingin)
         // 绑定点击事件
         $('#sginSubmit').on('submit',_handleSubmit(router))
    }
}
export {
    indexRoute,
    singinRoute
}