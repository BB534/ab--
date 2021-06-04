import ajaxClaas from '../tools/httpClass'
const singinModel = async (data)=>{
  try {
    let {result,jqXHR} = await ajaxClaas({
      url:'/api/users/login',
      type:'POST',
      data:data
    })
    return {result,jqXHR}
  } catch (error) {
    console.log(error);
  }
}

export default singinModel