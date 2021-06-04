import ajaxClaas from '../tools/httpClass'
 const auth = async ()=>{
  try {
    let {result,jqXHR} = await ajaxClaas({url:'/api/users/isAuth'})
    return result
  } catch (error) {
    console.log(error);
  }
}

export default auth