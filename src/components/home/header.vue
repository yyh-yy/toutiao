<template>

<el-row class="header-top">
  <el-col :span="12" class="left">
      <i :class="{'el-icon-s-unfold' : collapse,'el-icon-s-fold':!collapse}" @click="collapseOrOpen" ></i>
      <span>江苏传智播客教育科技股份有限公司</span>
  </el-col>
  <el-col :span="12" class="right">
      <el-row type="flex" justify="end" align="middle">
          <img :src="userInfo.photo ? userInfo.photo:userImg" alt="">
    <el-dropdown @command='clickMenu'>
      <span>{{userInfo.name}}</span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command='info' @click="clickMenu">个人信息</el-dropdown-item>
        <el-dropdown-item command='git'>Git地址</el-dropdown-item>
        <el-dropdown-item command='esc'>退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
      </el-row>
  </el-col>
</el-row>

</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collapse: false,
      userInfo: {},
      userImg: require('../../assets/img/avatar.jpg')
    }
  },
  created () {
    this.updateUserInfo()

    eventBus.$on('updateUserInfo', () => {
      this.updateUserInfo()
    })
  },
  methods: {
    collapseOrOpen () {
      this.collapse = !this.collapse
      eventBus.$emit('changeCollapse')
    },
    updateUserInfo () {
      // let token = window.localStorage.getItem('user-token')
      this.$http({
        url: '/user/profile'
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
      }).then(res => {
        console.log(res)

        this.userInfo = res.data
      })
    },
    clickMenu (command) {
      if (command === 'info') {
        this.$router.push('/home/account')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/yyh-yy/toutiao/commit/f4955027ada6b14eecccbde59e72e7c465600aa2'
      } else {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      }
    }
  }

}
</script>

<style lang='less' scoped>
.header-top {
    height: 50px;

    .left {
      font-size: 20px;
      line-height: 50px;
      span{
          font-size: 16px;
          margin-left:5px;
      }
    }
    .right {
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;

        }
        span {
            margin-left: 8px;
        }

    }
}
</style>
