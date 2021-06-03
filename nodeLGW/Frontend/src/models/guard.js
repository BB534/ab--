 const routeGuard = ()=>{
   return new Promise((resolve)=>{
      $.ajax({
        type: "get",
        url: "/api/users/isAuth",
        dataType: "json",
        headers:{
          'X-Access-Token':localStorage.getItem('lgw-token') || '',
          'X-Access-User':localStorage.getItem('lgw-user') || ''
        },
        success: function (data) {
          resolve(data)
        }
      });
   }) 
}

export default routeGuard