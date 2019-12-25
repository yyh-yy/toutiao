<template>
  <el-card class="articles">
    <bread-crumb slot="header">
      <template slot="title">文章列表</template>
    </bread-crumb>
    <el-form style="padding-left:55px">
      <el-form-item label="文章状态:">
        <el-radio-group v-model="searchForm.status">
          <!-- 放置一个单选组  文章状态，0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除，不传为全部-->
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表:">
        <el-select placeholder="请选择频道" v-model="searchForm.channel_id">
            <el-option v-for="item in channels" :key='item.id' :label="item.name" :value="item.id">

            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间选择:">
        <el-date-picker
        v-model="searchForm.dateRange"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <el-row class="total" type="flex" align="middle">
        <span>共找到10000条符合条件的内容</span>
    </el-row>
    <div class="article-item">
        <!-- 左侧 -->
        <div class="left">
            <img src="../../assets/img/avatar.jpg" alt="">
            <div class="info">
                <span>89期的程序们</span>
                <el-tag class="tag">标签一</el-tag>
                <span class="date">2019-12-24 15:07:01</span>

            </div>
        </div>
        <div class="right">
            <i class="el-icon-edit">修改</i>
            <i class="el-icon-delete">删除</i>
        </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      searchForm: {
        status: 5,
        channel_id: null,
        dateRange: []

      },
      channels: []
    }
  },
  methods: {
    //   获取文章频道
    getChannels () {
      this.$http({
        url: '/channels'

      }).then(res => {
        console.log(res)

        this.channels = res.data.channels
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style lang='less' scoped>
.articles{
    .total {
        height: 60px;
        border-bottom: 1px dashed #999;
    }
    .article-item {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid #f2f3f5;
    }
    .left {
        display: flex;
        img {
            width: 150px;
            height: 150px;
            border-radius: 4px;
        }
        .info {
            height: 100px;
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .date{
                color: #999;
                font-size: 12px;
            }
        }
    }
    .right {
        font-size: 16px;
        margin-right: 8px;
        cursor: pointer;
        i {
            margin-right: 5px
        }
    }
}
</style>
