
// 等到dom元素加载完后执行，隐藏代码
// $(function(){
//   $('div').hide();
// })

// $("筛选选择器")
/**
 * $.css(参数，值) Jquery设置css样式 具有隐式迭代，给所有匹配的元素内部进行遍历
 * $('li:first')  筛选第一个
 * last 获取最后一个
 * eq(index) 使用索引号获取
 * odd 获取奇数
 * even 获取偶数
 */

/**
 * 筛选方法
 * parent() 查找父级
 * children(选择器) 最近一级选择器 相当于ul>li
 * find(元素) 后代选择器 (ul li)
 * siblings(元素) 查找兄弟节点，不包括自己本身
 * nextALL([]) 查找当前元素之后的所有同辈
 * prevtAll() 查找当前元素之前的所有同辈
 * hasClass(class) 检查当前元素是否包含有某个特定的类,如果有返回true
 * eq(idnex) 从第几个开始
 */

// // 下拉框
// $(function() {
//   $(".nav>li").mouseover(function(){
//     $(this).children("ul").show();
//     $(this).mouseleave(function(){
//       $(this).children("ul").hide();
//     })
//   });
// })

/**
 * 样式操作
 * css(),只有一个属性名，没有值则返回值；可以使用对象来更改多个；复合属性,使用驼峰命名法
 * addClass() 添加类
 * removeClass() 移除类
 * toggleClass() 切换类
 */

/**
 * 动画效果
 * show() 显示 (速度:slow,normal,fast),切换效果(linear：匀速),fn：回调函数
 * hide() 隐藏
 * toggle() 切换
 * 
 */