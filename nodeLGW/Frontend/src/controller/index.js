import indexTpl from '../views/index.art'
import singinTpl from '../views/singin.art'
import usersTpl from '../views/users.art'
import loadingTpl from '../views/loading.art'
import usersListTpl from '../views/users-list.art'
import usersPageTpl from '../views/users-pages.art'


const pageSize  = 5;
let  curPage = 1;
let listData = [];

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
            _loadOne()
            _userList(1)
        }
    })
    $usersClose.click();
}

// 请求数据
const _loadOne = ()=>{
    $.ajax({
        type:'get',
        url:"/api/users/list",
        // async:false, //关闭异步
        success:function(result){
            listData = result.data
            _usersPage(listData)
            _userList(curPage)
        }
    })
}

// 列表
const _userList = (pageOne)=>{
    let start = (pageOne - 1) * pageSize;
    $('#users-list').html(usersListTpl({
        data:listData.slice(start,start + pageSize)
    }))

}

const _setPageActive = (index)=>{
    $('#users-page #page-body li:not(:first,:last)')
    .eq(index -1)
    .addClass('active')
    .siblings()
    .removeClass('active');
}

// 分页渲染
const _usersPage = (data)=>{

    const tool = data.length;
    const pagedCount = Math.ceil(tool / pageSize);
    const pageArray = new Array(pagedCount)
    const htmlPage = usersPageTpl({
        pageArray
    })
    $('#users-page').html(htmlPage)
    _setPageActive(curPage)
}

const indexRoute = (router)=>{
    return (req,res,next) => {
        res.render(indexTpl())
        // 调用window.resize，让页面撑满整个屏幕
        $(window,'.wrapper').resize()
        // 页面填充
        $('#content').html(usersTpl())
        // 代理方式绑定删除事件
        $('#users-list').on('click','.removeId',function(){
            $.ajax({
                url:'/api/users/remove',
                type:'delete',
                data:{
                    id:$(this).data('id')
                },
                success:function(result){
                    _loadOne()
                    // 计算页码是否是最后一页
                    const isLastPage = Math.ceil(listData.length / pageSize) === curPage
                    const restOne = listData.length % pageSize === 1
                    const notChildPage = curPage > 0
                    if(isLastPage && restOne && notChildPage){
                        curPage--
                    }
                }
            })
        })

        // 绑定页码事件
        $('#users-page').on('click','#page-body li:not(:first,:last)',function(){
            let index = $(this).index()
            _userList(index)
            curPage = index
            _setPageActive(index)
        })
        _loadOne()
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