<template>
  <div class="login">
<el-card class="card">
    <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
    </div>
    <el-form :model="loginForm" :rules="rules" ref='myForm' >
        <!-- 表单域 -->
        <el-form-item prop='mobile'>
            <el-input  placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
        </el-form-item >
              <el-form-item prop='code'>
            <el-input  placeholder="请输入验证码" style='width:65%' v-model="loginForm.code"></el-input>
            <el-button plain style="float:right">获取验证码</el-button>
        </el-form-item>
              <el-form-item prop="check">
            <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item >
        <el-form-item>
          <el-button type="primary" @click='submitForm' style="width:100%">登录</el-button>
        </el-form-item>

    </el-form>
</el-card>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      rules: {
        mobile: [{ required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '输入有误' }
        ],
        code: [{ required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入6位验证码' }
        ],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('未同意注册'))
          }
        } }]

      }

    }
  },
  methods: {
    submitForm () {
      this.$refs.myForm.validate((isOk) => {
        if (isOk) {
          this.$http.post(
            '/authorizations', this.loginForm
          ).then(result => {
            window.localStorage.setItem('user-token', result.data.token)
            this.$router.push('/home')
          }).catch(() => {
            this.message({
              type: 'warning',
              message: '手机号或验证码错误'
            })
          })
        }
      })
    }
  }

}
</script>

<style lang='less' scoped>
.login{
    background-image: url('../../assets/img/back.jpg');
    height: 100vh;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .card {
        width: 450px;
        height: 350px;
        .title {
            text-align: center;
            margin-bottom: 30px;
            img {
                height: 50px;
            }
        }
    }
}

</style>
