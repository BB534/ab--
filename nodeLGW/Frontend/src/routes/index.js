import SMERouter from 'sme-router'
import indexRoute from '../controller/index'
import singinRoute from '../controller/singin'
const router = new SMERouter('root')

// 路由守卫
router.use((req)=>{
  $.ajax({
    type: "get",
    url: "/api/users/isAuth",
    dataType: "json",
    success: function (data) {
      if(data.desc){
        router.go('/index')
      }else{
        router.go('/singin')
      }
    }
  });
})

router.route('/',()=>{})

router.route('/singin',singinRoute(router))

router.route('/index',indexRoute(router))

export default router