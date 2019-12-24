<template>
  <el-card v-loading="loading">
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- 上传图片 -->
    <el-row type="flex" justify="end">
      <el-upload action="" :http-request="uploadImg" :show-file-list='false'>
      <el-button size="small" type="primary">上传图片</el-button>
      </el-upload>
    </el-row>
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部图片" name="all">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row type="flex" class="icon" justify="space-around" align="middle">
              <i @click="collectOrCancel(item)" class="el-icon-star-off" :style="{color:item. is_collected?'red':'#000'}"></i>
              <i class="el-icon-delete-solid" @click='del_item(item.id)'></i>
            </el-row>
          </el-card>
        </div>

      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
       <el-row type="flex" justify="center">
          <el-pagination background layout="prev, pager, next"
          :total="page.total"
          :page-size="page.pageSize"
          :current-page="page.currentPage"
          @current-change='changePage'
          ></el-pagination>
        </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      activeName: 'all',
      list: [],
      page: {
        currentPage: 1,
        pageSize: 8,
        total: 0
      }
    }
  },
  methods: {
    // 删除
    del_item (id) {
      this.$confirm('你确定要删除此图片吗？').then(() => {
        this.$http({
          method: 'delete',
          url: `/user/images/${id}`
        }).then(res => {
          this.getMaterial()
        })
      })
    },
    // 取消或者收藏
    collectOrCancel (item) {
      this.$http({
        method: 'put',
        url: `/user/images/${item.id}`,
        data: {
          collect: !item.is_collected
        }

      }).then(res => {
        this.getMaterial()
      })
    },
    // 上传图片
    uploadImg (params) {
      this.loading = true
      let data = new FormData()
      data.append('image', params.file)
      this.$http({
        method: 'post',
        url: '/user/images',
        data
      }).then(res => {
        this.loading = false
        this.getMaterial()
      })
    },
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    changeTab () {
      this.page.currentPage = 1
      this.getMaterial()
    },
    getMaterial () {
      this.$http({
        url: '/user/images',
        params: {
          page: this.page.currentPage,
          per_page: this.page.pageSize,
          collect: this.activeName === 'collect'
        }
      }).then(res => {
        this.list = res.data.results
        this.page.total = res.data.total_count
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
      i {
        cursor: pointer;
      }
    }
  }
}
</style>
