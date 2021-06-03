
const singinModel = (data)=>{
  return new Promise((resolve,reject)=>{
      $.ajax({
        type:'POST',
        url:'/api/users/login',
        data,
        success:function(data, textStatus, jqXHR){
          resolve({
            data,
            jqXHR
          })
        }
      })
  })
}


export default singinModel