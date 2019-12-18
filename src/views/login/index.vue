<template>
  <div class="login">
<el-card class="card">
    <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
    </div>
    <el-form>
        <!-- 表单域 -->
        <el-form-item>
            <el-input v-model="input" placeholder="请输入手机号"></el-input>
        </el-form-item >
              <el-form-item>
            <el-input v-model="input" placeholder="请输入验证码" style='width:65%'></el-input>
            <el-button plain style="float:right">获取验证码</el-button>
        </el-form-item>
              <el-form-item>
            <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item >
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>

    </el-form>
</el-card>
  </div>
</template>

<script>
export default {

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
