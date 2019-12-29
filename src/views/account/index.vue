<template>
<el-card v-loading='loading'>
    <bread-crumb slot="header">
    <template slot="title">账户信息</template>
    </bread-crumb>
    <el-form style="margin-left:100px" label-width="100px" ref="myForm" :model="formData" :rules="rules">
        <el-form-item label="用户名：" prop="name">
            <el-input style="width:35%" v-model="formData.name"></el-input>
        </el-form-item>
                <el-form-item label="简介：">
            <el-input style="width:35%" v-model="formData.intro"></el-input>
        </el-form-item>
                <el-form-item label="邮箱" prop="email">
            <el-input style="width:35%" v-model="formData.email"></el-input>
        </el-form-item>
                <el-form-item label="手机号">
            <el-input style="width:35%" v-model="formData.mobile" disabled></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="seveInfo">保存信息</el-button>
        </el-form-item>
    </el-form>
    <el-upload class="head-upload"
     action="" :show-file-list="false" :http-request="uploadImg">
        <img :src="formData.photo ? formData.photo : defaultImg" alt="">

    </el-upload>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      formData: {
        name: '',
        intro: '',
        email: '',
        photo: '',
        mbile: ''
      },
      defaultImg: require('../../assets/img/avatar.jpg'),
      rules: {
        name: [{ required: true, message: '用户名不能为空' }, {

          min: 2,
          max: 7,
          message: '用户名长度在1到7个字符'
        }],
        email: [{ required: true, message: '用户邮箱不能为空' }, {
          pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '请输入正确的邮箱地址'
        }]

      }
    }
  },
  methods: {
    //   上传图片
    uploadImg (params) {
      this.loading = true
      let data = new FormData()
      data.append('photo', params.file)
      this.$http({
        url: '/user/photo',
        method: 'PATCH',
        data
      }).then(res => {
        this.loading = false
        this.formData.photo = res.data.photo
      })
    },
    //   保存信息
    seveInfo () {
      this.$refs.myForm.validate().then(res => {
        this.$http({
          url: '/user/profile',
          method: 'PATCH',
          data: this.formData
        }).then(res => {
          this.$message({
            type: 'success',
            message: '用户信息保存成功'
          })
        })
      })
    },
    // 获取用户信息
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
