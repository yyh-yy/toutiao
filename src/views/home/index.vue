<template>
 <el-container>
<el-aside :style="{width:collapse ? '60px' : '230px'}" style="transition:all 0.5s; min-height:100vh;background-color:#353b4e;">
<side-bar :collapse="collapse"></side-bar>
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
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collapse: false
    }
  },
  created () {
    eventBus.$on('changeCollapse', () => {
      this.collapse = !this.collapse
    })
  }
}
</script>

<style>

</style>
