<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部图片" name="all">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row type="flex" class="icon" justify="space-around" align="middle">
            <i class="el-icon-star-off"></i>
            <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect"></el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: []
    }
  },
  methods: {
    changeTab () {
      this.getMaterial()
    },
    getMaterial () {
      this.$http({
        url: '/user/images',
        params: {
          // collect: this.activeName === 'collect'
          collect: false
        }
      }).then(res => {
        this.list = res.data.results
        console.log(this.list)
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang='less' scoped>
.img-list {
  display: flex;
  flex-wrap: wrap;
  .img-card {
    width: 200px;
    height: 250px;
    margin: 20px 40px;
    position: relative;
    img {
      height: 100%;
      width: 100%;
    }
    .icon {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      font-size: 20px;
      height: 60px;
      background-color: #f4f5f6;
    }

  }
}
</style>
