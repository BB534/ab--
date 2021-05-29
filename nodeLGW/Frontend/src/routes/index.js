import SMERouter from 'sme-router'
import { indexRoute,singinRoute } from '../controller'
const router = new SMERouter('root')

// route config
router.route('/',singinRoute(router))

router.route('/index',indexRoute(router))


export default router