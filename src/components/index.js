import Header from '../components/home/header.vue'
import Siderbar from '../components/home/sidebar.vue'
import breadCrumb from '../components/common/bread-crumb.vue'
// 注册全局组件
export default {
  install (Vue) {
    Vue.component('header-top', Header)
    Vue.component('side-bar', Siderbar)
    Vue.component('bread-crumb', breadCrumb)
  }
}
