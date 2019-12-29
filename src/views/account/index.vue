<template>
<el-card>
    <bread-crumb slot="header">
    <template slot="title">账户信息</template>
    </bread-crumb>
    <el-form style="margin-left:100px" label-width="100px">
        <el-form-item label="用户名：">
            <el-input style="width:35%" v-model="formData.name"></el-input>
        </el-form-item>
                <el-form-item label="简介：">
            <el-input style="width:35%" v-model="formData.intro"></el-input>
        </el-form-item>
                <el-form-item label="邮箱">
            <el-input style="width:35%" v-model="formData.email"></el-input>
        </el-form-item>
                <el-form-item label="手机号">
            <el-input style="width:35%" v-model="formData.mobile" disabled></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">保存信息</el-button>
        </el-form-item>
    </el-form>
    <el-upload class="head-upload" action="" :show-file-list="false">
        <img src="../../assets/img/avatar.jpg" alt="">

    </el-upload>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        name: '',
        intro: '',
        email: '',
        photo: '',
        mbile: ''
      }
    }
  },
  methods: {
    getUserInfo () {
      this.$http({
        url: '/user/profile'
      }).then(res => {
        this.formData = res.data
      })
    }
  },
  created () {
    this.getUserInfo()
  }

}
</script>

<style lang='less' scoped>
.head-upload {
position: absolute;
right: 300px;
top: 200px;
img {
    width: 200px;
    height: 200px;
    border-radius: 50%

}
}
</style>
