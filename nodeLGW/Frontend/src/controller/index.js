import indexTpl from '../views/index.art'
import usersTpl from '../views/users.art'
import loadingTpl from '../views/loading.art'
import usersListTpl from '../views/users-list.art'
import router from '../routes'
import toolPage from '../tools/pageClass'
import page from '../databas/page'

const pageSize  = 5;
let listData = [];

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
            toolPage(listData,pageSize)
            _userList(page.curPage)
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

// 观察者模式通讯
const _subscribe = ()=>{
    $('body').on('changeCurPage',(e,index)=>{
        _userList(page.curPage)
    })
}

const _methods = ()=>{
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
                const isLastPage = Math.ceil(listData.length / pageSize) === page.curPage
                const restOne = listData.length % pageSize === 1
                const notChildPage = page.curPage > 0
                if(isLastPage && restOne && notChildPage){
                    page.setcurPage(page.curPage -1)
                }
            }
        })
    })
    

    //  登出
    $('#user-out').on('click',()=>{
        $.ajax({
            url:'/api/users/logout',
            success:function(data){
                if(data.desc){
                    location.reload()
                }
            }
        })
    })

    // 添加事件
    $('#users-save').on('click',_usersSave)
}

const indexRoute = (router)=>{
    const index = (req,res)=>{
        res.render(indexTpl())
        // 调用window.resize，让页面撑满整个屏幕
        $(window,'.wrapper').resize()
        // 页面填充
        $('#content').html(usersTpl())
        // 首次渲染
        _loadOne()
        // 绑定事件
        _methods()
        // 订阅事件
        _subscribe()
        
    }
    return (req,res,next) => {
        $.ajax({
            type: "get",
            url: "/api/users/isAuth",
            dataType: "json",
            success: function (data) {
              if(data.desc){
                index(req,res)
              }else{
                router.go('/singin')
              }
            }
        });
    }
}


export default indexRoute