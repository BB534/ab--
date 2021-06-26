import indexPageTpl from '../views/index-page.art'

const navHeader = ()=>{
  const  nav = {
    '#/index/users':{
      navigation:'用户管理',
      Subnavigation:"用户列表"
    },
    '#/index/options':{
      navigation:'职位管理',
      Subnavigation:"职位列表"
    }
  }
  let hash = location.hash
  let html = indexPageTpl({
    minNav:nav[hash]['navigation'],
    subNav:nav[hash]['Subnavigation']
  })
  // 渲染
  $('#content').before(html)

}


export default navHeader