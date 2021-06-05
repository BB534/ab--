import gp21Route from 'gp21-router'
import indexRoute from '../controller/index'
import singinRoute from '../controller/singin'
import auth from '../models/auth'
import userRoute from '../controller/users/list'
import options from '../controller/options/list'
const router = new gp21Route('root')

// 路由守卫
router.use( async (req,res,next)=>{
  const url = req.url
  let result = await auth()
  if(result.desc){
    router.go(url)
  }else{
    router.go('/singin')
  }
})

// router.route('/',()=>{})

router.route('/singin',singinRoute(router))

router.route('/index',indexRoute(router))
router.route('/index/users',userRoute(router))
router.route('/index/options',options(router))

router.route('*',(req,res,next)=>{
  res.redirect('/index/')
})

export default router