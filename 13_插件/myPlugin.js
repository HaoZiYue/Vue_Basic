/*
自定义一个插件
*/
(function  (){
    //必须先给MyPlugin指定数据
    const MyPlugin = {};
    MyPlugin.install = function (Vue) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
          console.log('myGlobalMethod()调用了');
          
        }
      
        // 2. 定义一个全局命令
        Vue.directive('my-directive', (el,binding)=>{
            el.textContent = binding.value.toUpperCase();
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
          console.log('vm.$myMethod()');
          
        }
      }
    window.MyPlugin = MyPlugin;
})(window)