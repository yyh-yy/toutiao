<template>
 <el-container>
<el-aside>
<side-bar style="height:100vh;background-color:#353b4e"></side-bar>
</el-aside>
 <el-container>
<el-header>
  <header-top></header-top>
</el-header>
 <el-main>内容</el-main>
   </el-container>
 </el-container>
</template>

<script>
// import sidebar from '../../components/home/sidebar'
// import header from '../../components/home/header'
export default {
  // components: {
  //   'side-bar': sidebar,
  //   'header-top': header

  // }
}
</script>

<style lang='less' scoped>
.nav{
  width: 230px;
  .title {
    background-color: #2e2f32;
    text-align: center;
    img {
      height: 35px;
    }

  }

}
</style>
