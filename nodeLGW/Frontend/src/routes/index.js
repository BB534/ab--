import SMERouter from 'sme-router'
import indexRoute from '../controller/users/index'
import singinRoute from '../controller/singin'
import routeGuard from '../models/guard'

const router = new SMERouter('root')

// 路由守卫
router.use( async (req,res,next)=>{
  let result = await routeGuard()
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