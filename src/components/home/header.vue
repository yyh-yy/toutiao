<template>

<el-row class="header-top">
  <el-col :span="12" class="left">
      <i class="el-icon-s-fold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
  </el-col>
  <el-col :span="12" class="right">
      <el-row type="flex" justify="end" align="middle">
          <img src="../../assets/img/avatar.jpg" alt="">
    <el-dropdown>
      <span>yyh</span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>Git地址</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
      </el-row>
  </el-col>
</el-row>

</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.header-top {
    height: 50px;

    .left {
      font-size: 20px;
      line-height: 50px;
      span{
          font-size: 16px;
          margin-left:5px;
      }
    }
    .right {
        img {
            width: 35px;
            height: 35px;
            border-radius: 50%;

        }
        span {
            margin-left: 8px;
        }

    }
}
</style>
