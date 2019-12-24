
<template>
<div>
  <el-card>
      <bread-crumb slot="header">
      <template slot="title">
          评论管理
      </template>
      </bread-crumb>
      <el-table :data='list'>
          <el-table-column label="标题"  width="600" prop='title'></el-table-column>
          <el-table-column :formatter="formatterBoolean" prop="comment_status" label="评论状态"></el-table-column>
          <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
          <el-table-column label="粉丝评论数" prop="fans_comment_count"></el-table-column>
          <el-table-column label="操作">
              <template slot-scope="obj">
            <el-button type="text" size="small">修改</el-button>
            <el-button @click="closeOrOpen(obj.row)" type="text" size="small">{{obj.row.comment_status ? '关闭' : '打开'}}评论</el-button>
            </template>
          </el-table-column>
      </el-table>
  </el-card>
  <el-row type="flex" justify="center" style="height:80px" align="middle">
  <el-pagination background layout="prev, pager, next" :current-page='page.currentPage' :total="page.total" :page-sizes='page.pageSize'></el-pagination>
</el-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        total: 0,
        pageSize: 10,
        currentPage: 1

      }
    }
  },
  methods:
{
  getComment () {
    this.$http({
      url: '/articles',
      params: { response_type: 'comment' }
    }).then(res => {
      this.list = res.data.results
      this.page.total = res.data.total_count
    })
  },
  formatterBoolean (row, column, cellValue, index) {
    return cellValue ? '正常' : '关闭'
  },
  closeOrOpen (row) {
    console.log(row)

    let mess = row.comment_status ? '关闭' : '打开'
    this.$confirm(`您确定要${mess}评论吗`, '提示').then(() => {
      this.$http({
        method: 'put',
        url: '/comments/status',
        params: { article_id: row.id.toString() },
        data: { allow_comment: !row.comment_status }
      }).then(res => {
        debugger
        this.getComment()
      }).catch(() => {
        debugger
      })
    })
  }
},
  created () {
    this.getComment()
  } }
</script>

<style>

</style>
