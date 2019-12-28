<template>
  <div class="cover-image">
    <el-tabs v-model="activeName" style="width:100%">
    <el-tab-pane label="图片管理" name="first">
      <div class="select-image-list">
        <el-card v-for="item in list" :key="item.id" class="img-card">
          <img :src="item.url" alt="" @click="clickImg(item.url)">
        </el-card>
      </div>
    </el-tab-pane>
    <el-tab-pane label="上传图片" name="second">上传图片</el-tab-pane>
    <el-row type="flex" justify="center" style="margin-top:40px">
<el-pagination
  background
  layout="prev, pager, next"
  :page-size="page.pageSize"
  :current-page="page.currentPage"
  :total="page.total"
  @current-change="changePage">
</el-pagination>
</el-row>
  </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      list: [],
      page: {
        total: 0,
        pageSize: 8,
        currentPage: 1
      }
    }
  },
  methods: {
    // 点击图片传给父级
    clickImg (url) {
      this.$emit('selectOneImge', url)
    },
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getImage()
    },
    getImage () {
      this.$http({
        url: '/user/images',
        params: { collect: false, page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(res => {
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    }
  },
  created () {
    this.getImage()
  }

}
</script>

<style lang='less' scoped>
.select-image-list{
display: flex;
flex-wrap: wrap;
justify-content: space-around;
.img-card {
 width: 150px;
 height: 150px;
 margin-top: 20px
}
img {
  width: 100%;
  height: 100%;
}
}

</style>
