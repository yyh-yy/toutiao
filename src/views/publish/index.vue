<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发表文章</template>
    </bread-crumb>
    <!-- 容器 -->
    <el-form :model="formData" :rules="publishRules" style="margin-left:50px" label-width="100px">
      <el-form-item label="标题" prop="title">
        <el-input style="width:60%" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content" v-model="formData.content">
        <el-input type="textarea" :row="4"></el-input>
      </el-form-item>
      <el-form-item label="封面" prop="cover">
        <el-radio-group v-model="formData.cover.type">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="频道" prop="channel_id">
        <el-select v-model="formData.channel_id">
          <el-option
            v-for="item in channels"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">发布</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [],
      formData: {
        title: '',
        content: '',
        cover: {
          type: 0,
          images: ['', '', '']
        },
        channel_id: null
      },
      //   校验规则
      publishRules: {
        title: [{ required: true, message: '文章标题不能为空' }, {
          min: 5,
          max: 30,
          message: '标题的长度在5到30个字符之间'
        }],
        content: [{ required: true, message: '文章内容不能为空' }],
        channel_id: [{ required: true, message: '文章内容不能为空' }]
      }
    }
  },
  methods: {
    //   发布文章
    publishArticle () {
      this.$refs.publishForm.validate(isOk => {
        if (isOk) {
          console.log('校验通过')
        }
      })
    },
    // 获取所有的频道
    getChannels () {
      this.$http({
        url: '/channels'
      }).then(res => {
        this.channels = res.data.channels
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style>
</style>
