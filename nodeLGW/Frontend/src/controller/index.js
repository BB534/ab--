import indexTpl from '../views/index.art'
import singinTpl from '../views/singin.art'
import usersTpl from '../views/users.art'
import loadingTpl from '../views/loading.art'
import usersListTpl from '../views/users-list.art'
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
        url:'/api/users/userSave',
        data,
        success:function(data){
            console.log(data);
        }
    })
    $usersClose.click();
}

const _userList = ()=>{
    $.ajax({
        type:'get',
        url:"/api/users/list",
        success:function(result){
            $('#users-list').html(usersListTpl({
                data:result.data
            }))
        }
    })
}

const indexRoute = (router)=>{
    return (req,res,next) => {
        res.render(indexTpl())
        // 调用window.resize，让页面撑满整个屏幕
        $(window,'.wrapper').resize()
        //页面填充
        $('#content').html(usersTpl())
        // 用户数据渲染
        _userList()
        // 添加事件
        $('#users-save').on('click',_usersSave)
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
export {
    indexRoute,
    singinRoute
}