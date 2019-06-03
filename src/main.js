
import App from './App.vue'

import Vue from 'vue'

//import VueResource from 'vue-resource'
//import './bus' // 引入事件总线

//Vue.prototype.$bus = new Vue()

import store from './store'

// 声明使用vueResource插件
//Vue.use(VueResource) // 内部给Vue的原型对象上添加了一个能发ajax请求的属性对象$http

new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  store
})
