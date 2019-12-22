import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './permission'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import ElementUI from 'element-ui'
import Component from './components/index'
import './style/index.less'
import axios from './utils/request'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Component)

// 设置一个常态值
Vue.prototype.$http = axios // 赋值给全局对象

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
