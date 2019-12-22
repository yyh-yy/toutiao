<template>
 <el-container>
<el-aside style="min-height:100vh;background-color:#353b4e;">
<side-bar ></side-bar>
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

<style>

</style>
