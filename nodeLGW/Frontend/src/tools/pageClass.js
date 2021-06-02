import usersPageTpl from '../views/users-pages.art'
import page from '../databas/page'

// 渲染点击高亮
const _setPageActive = (index)=>{
  $('#users-page #page-body li:not(:first,:last)')
  .eq(index -1)
  .addClass('active')
  .siblings()
  .removeClass('active');
}

/**
 * 
 * @param {Object} data 
 * @param {Number} pageSize 
 */
const toolPage = (data,pageSize)=>{
  const tool = data.length;
  const pagedCount = Math.ceil(tool / pageSize);
  const pageArray = new Array(pagedCount)
  const htmlPage = usersPageTpl({
      pageArray
  })
  $('#users-page').html(htmlPage)
  _setPageActive(page.curPage)
  _bindEvent(data,pageSize)
}

const _bindEvent = (data,pageSize)=>{

      // 绑定页码事件
    $('#users-page').on('click','#page-body li:not(:first,:last)',function(){
      let index = $(this).index()
      page.setcurPage(index)
      $('body').trigger('changeCurPage',index);
      _setPageActive(index)
    })
    // 上一页
    $('#users-page').on('click','#page-body li:first',function () { 
      if(page.curPage > 1){
          page.setcurPage(page.curPage - 1)
          $('body').trigger('changeCurPage',page.curPage);
          _setPageActive(page.curPage)
      }
    })
    //  下一页
    $('#users-page').on('click','#page-body li:last',function(){
      if(page.curPage < Math.ceil(data.length / pageSize)){
        page.setcurPage(page.curPage + 1)
        $('body').trigger('changeCurPage',page.curPage);
        _setPageActive(page.curPage)
      }
    })

}




export default toolPage
