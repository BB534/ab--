import indexTpl from '../views/index.art'
import singinTpl from '../views/singin.art'
import usersTpl from '../views/users.art'
const htmlIndex = indexTpl({})
const htmlSingin = singinTpl({})

// 登录
const _handleSubmit = (router)=>{
    // 获取事件对象
    return (e)=>{
        // 阻止提交表单默认事件
        e.preventDefault()
        router.go('/index')
    }
}

// 添加用户
const _usersSave = ()=>{
    const $usersClose = $('#users-close')
    let data = $('#usersSave-form').serialize();
    // 表单请求事件
    $.ajax({
        type:'POST',
        url:'',
        data,
        beforeSend,
        success
    })
    $usersClose.click();
}

const indexRoute = (router)=>{
    return (req,res,next) => {
        res.render(htmlIndex)
        // 调用window.resize，让页面撑满整个屏幕
        $(window,'.wrapper').resize()
        let usersHtml = usersTpl()
        $('.content').html(usersHtml)
        $('#users-save').on('click',_usersSave)
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