<template>
 <el-container>
<el-aside>
<side-bar style="height:100vh;background-color:#353b4e"></side-bar>
</el-aside>
 <el-container>
<el-header>顶部</el-header>
 <el-main>内容</el-main>
   </el-container>
 </el-container>
</template>

<script>
import sidebar from '../../components/home/sidebar'
export default {
  components: {
    'side-bar': sidebar

  }
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
