import router from '../router' // 导航守卫
// 全局前置守卫当路由发生变化时执行回调函数
router.beforeEach(function (to, from, next) {
  // 没有token拦截
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
