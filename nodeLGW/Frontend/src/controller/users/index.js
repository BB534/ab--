import indexTpl from '../../views/index.art'
import usersTpl from '../../views/users.art'
import loadingTpl from '../../views/loading.art'
import usersListTpl from '../../views/users-list.art'
import usersSave from './usersAdd'
import router from '../../routes'
import toolPage from '../../tools/pageClass'
import page from '../../databas/page'


const pageSize  = 5;
let listData = [];

// 请求数据
const _loadOne = ()=>{
    $.ajax({
        type:'get',
        url:"/api/users/list",
        headers:{
            'X-Access-Token':localStorage.getItem('lgw-token') || ''
        },
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

    $('body').on('changeUserAdd',(e)=>{
        _loadOne()
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
            headers:{
                'X-Access-Token':localStorage.getItem('lgw-token') || ''
            },
            success:function(result){
                // 计算页码是否是最后一页
                _loadOne()
                let isLastPage = Math.ceil(listData.length / pageSize) === page.curPage
                let restOne = listData.length % pageSize === 1
                let notChildPage = page.curPage > 0
                if(isLastPage && restOne && notChildPage){
                    page.setcurPage(page.curPage -1)
                    
                }
            }
        })
    })

    //  登出
    $('#user-out').on('click',()=>{
        localStorage.setItem('lgw-token','')
        location.reload()
    })


}

const indexRoute = (router)=>{
    const index = (req,res)=>{
        res.render(indexTpl())
        // 调用window.resize，让页面撑满整个屏幕
        $(window,'.wrapper').resize()
        // 页面填充
        $('#content').html(usersTpl())
        // 绑定添加按钮
        $('#usersBtn').on('click',usersSave)
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
            headers:{
                'X-Access-Token':localStorage.getItem('lgw-token') || ''
            },
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