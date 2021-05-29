import indexTpl from '../views/index.art'
import singinTpl from '../views/singin.art'
const htmlIndex = indexTpl({})
const htmlSingin = singinTpl({})

const _handleSubmit = (router)=>{
    // 获取事件对象
    return (e)=>{
        e.preventDefault()
        router.go('/index')
    }
}
const indexRoute = (router)=>{
    return (req,res,next) => {
        res.render(htmlIndex)
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