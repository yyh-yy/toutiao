import Header from '../components/home/header.vue'
import Siderbar from '../components/home/sidebar.vue'
// 注册全局组件
export default {
  install (Vue) {
    Vue.component('header-top', Header)
    Vue.component('side-bar', Siderbar)
  }
}
