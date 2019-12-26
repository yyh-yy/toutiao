<template>
  <el-card class="articles">
    <bread-crumb slot="header">
      <template slot="title">文章列表</template>
    </bread-crumb>
    <el-form style="padding-left:55px">
      <el-form-item label="文章状态:">
        <el-radio-group v-model="searchForm.status" @change="changeCondition">
          <!-- 放置一个单选组  文章状态，0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除，不传为全部-->
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表:">
        <el-select placeholder="请选择频道" v-model="searchForm.channel_id" @change="changeCondition">
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间选择:">
        <el-date-picker
          @change="changeCondition"
          v-model="searchForm.dateRange"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <el-row class="total" type="flex" align="middle">
      <span>共找到{{page.total}}条符合条件的内容</span>
    </el-row>
    <div class="article-item" v-for="item in list" :key="item.id.toString()">
      <!-- 左侧 -->
      <div class="left">
        <img :src="item.cover.images.length ? item.cover.images[0]:defaultImg" alt />
        <div class="info">
          <span>{{item.title}}</span>
          <el-tag
            :type="item.status | filterType"
            class="tag"
            style="width:80px; text-align:center"
          >{{item.status | filterStatus}}</el-tag>
          <span class="date">{{item.pubdate}}</span>
        </div>
      </div>
      <div class="right">
        <i class="el-icon-edit" @click="toModify(item.id)">修改</i>
        <i class="el-icon-delete" @click="delMaterial(item.id)">删除</i>
      </div>
    </div>
    <el-row type="flex" justify="center" style="height:80px" align="middle">
      <el-pagination background layout="prev, pager, next"
      :total="page.total" :page-size="page.pageSize"
      :current-page="page.currentPage"
      @current-change='changePage'
      ></el-pagination>
    </el-row>

  </el-card>
</template>

<script>
export default {
  // 过滤器
  filters: {
    filterStatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    },
    filterType (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'danger'
        default:
          break
      }
    }
  },
  data () {
    return {
      searchForm: {
        status: 5,
        channel_id: null,
        dateRange: []
      },
      channels: [],
      list: [],
      defaultImg: require('../../assets/img/avatar.jpg'),
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    // 修改页面
    toModify (id) {
      this.$router.push(`/home/publish/${id.toString()}`)
    },

    // 删除
    delMaterial (id) {
      this.$confirm('是否要删除该文章').then(() => {
        this.$http({
          url: `/articles/${id.toString()}`,
          method: 'delete'
        }).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getConditionArticle()
        })
      })
    },
    // 分页
    changePage (newPage) {
      console.log(newPage)

      this.page.currentPage = newPage
      this.getConditionArticle()
    },
    //   搜索筛选
    changeCondition () {
      this.page.currentPage = 1
      this.getConditionArticle()
    },
    getConditionArticle () {
      let params = {
        page: this.page.currentPage,
        per_page: this.page.pageSize,
        status: this.searchForm.status === 5 ? null : this.searchForm.status,
        channel_id: this.searchForm.channel_id,
        begin_pubdate: this.searchForm.dateRange.length ? this.searchForm.dateRange[0] : null,
        end_pubdate: this.searchForm.dateRange.length > 1 ? this.searchForm.dateRange[1] : null
      }
      this.getArticles(params)
    },
    //   获取文章数据列表
    getArticles (params) {
      this.$http({
        url: '/articles',
        params
      }).then(res => {
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    },
    //   获取文章频道
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
    this.getArticles()
    this.getConditionArticle({ page: 1, per_page: 10 })
  }
}
</script>

<style lang='less' scoped>
.articles {
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
      .date {
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
      margin-right: 5px;
    }
  }
}
</style>
