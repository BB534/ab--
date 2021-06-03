import page from '../../databas/page'
import addTpl from '../../views/users-add.art'
// 添加用户
const usersSave = ()=>{

  $('#users-box').after(addTpl());
  const _save = ()=>{
    let data = $('#usersSave-form').serialize();
    // 表单请求事件
    $.ajax({
        type:'POST',
        url:'/api/users/userSave',
        data,
        headers:{
            'X-Access-Token':localStorage.getItem('lgw-token') || ''
        },
        success:function(data){
            page.setcurPage(1)
            $('body').trigger('changeUserAdd');
        }
    })
    // 调用close关闭
    const $usersClose = $('#users-close')
    $usersClose.click();

  }


  $('#users-save').on('click',_save)
}

export default usersSave