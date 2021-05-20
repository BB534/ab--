/**
 * A：点击tab栏可以切换效果
 * B：点击+号，可以添加tab和内容项
 * C：点击x号可以删除当前的tab项和内容项
 * D：双击tab文字和内容 可以修改里边的文字
 */

let that;
class Tab{
  constructor(id){
    that = this;
    this.main = document.querySelector(id);
    // 获取添加按钮
    this.addbtn = this.main.querySelector('.tabadd');
    this.ul = this.main.querySelector('.fisrstnav ul:first-child');
    this.sec = this.main.querySelector('.tabscon');
    this.init();
  }
  // 初始化绑定事件
  init(){
    this.updateHtml();
    // 此时this为main
    this.addbtn.onclick = this.add;
    for(let i = 0;i < this.lis.length;i++){
      this.lis[i].index = i;
      // 添加切换事件
      this.lis[i].onclick = this.togchage;
      this.remo[i].onclick = this.del;
    }
  }
  // 获取元素
  updateHtml(){
    this.lis = this.main.querySelectorAll('li');
    this.sections = this.main.querySelectorAll('section');
    this.remo = this.main.querySelectorAll('.icon-guanbi');
  }
  // 添加
  add(){
    that.removeClassName();
    // this为添加按钮
    let temp = Math.ceil(Math.random()*10) ;
    let inseHtml = `<li class="liactive">
    <span>${temp}</span>
    <span class="iconfont icon-guanbi"></span>
    </li>`;
    let sectionHtml = `
    <section class="conactive">${temp}</section>
    `;
    that.ul.insertAdjacentHTML('beforeend',inseHtml);
    that.sec.insertAdjacentHTML('beforeend',sectionHtml);
    // 调用初始化
    that.init();
  }
  // 修改
  edit(){}
  // 删除
  del(e){
    // 因为父亲也有点击事件所以要阻止冒泡
    e.stopPropagation();
    // 通过父元素的索引号来获取自身的索引号
    let index = this.parentNode.index;
    if(that.lis.length > 1){
      that.lis[index].remove();
      that.sections[index].remove();
      that.init();
      index--;
      that.lis[index].click();
    }
  }
  // 切换
  togchage(){
    // 此时this为li
    that.removeClassName();
    that.lis[this.index].className = 'liactive';
    that.sections[this.index].className = 'conactive';
  }
  // 清除类的样式
  removeClassName(){
    for(let i=0;i<this.lis.length;i++){
      this.lis[i].className = '';
      this.sections[i].className = '';
    }
  }
}

new Tab('#tab');