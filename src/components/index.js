import Header from '../components/home/header.vue'
import Siderbar from '../components/home/sidebar.vue'
import breadCrumb from '../components/common/bread-crumb.vue'
import CoverImage from './publish/cover-image.vue'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 注册全局组件
export default {
  install (Vue) {
    Vue.component('header-top', Header)
    Vue.component('side-bar', Siderbar)
    Vue.component('bread-crumb', breadCrumb)
    Vue.component('quill-editor', quillEditor)
    Vue.component('cover-image', CoverImage)
  }
}
