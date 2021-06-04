import gp21Route from 'gp21-router'
import indexRoute from '../controller/index'
import singinRoute from '../controller/singin'
import auth from '../models/auth'
import userRoute from '../controller/users/list'

const router = new gp21Route('root')

// 路由守卫
router.use( async (req,res,next)=>{
  let result = await auth()
  if(result.desc){
    router.go('/index')
  }else{
    router.go('/singin')
  }
})

router.route('/',()=>{})

router.route('/singin',singinRoute(router))

router.route('/index',indexRoute(router))


export default router