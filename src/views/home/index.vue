<template>
 <el-container>
<el-aside>
<side-bar style="height:100vh;background-color:#353b4e"></side-bar>
</el-aside>
 <el-container>
<el-header>
  <header-top></header-top>
</el-header>
 <el-main>
   <router-view></router-view>
 </el-main>
   </el-container>
 </el-container>
</template>

<script>

export default {

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
