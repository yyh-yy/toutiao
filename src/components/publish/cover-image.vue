<template>
  <div class="cover-image">
    <div class="cover-image-item" v-for="(item,index) in list" :key="index" @click="openDialog(index)">
      <img :src="item ? item :defaultImg" alt />
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <select-image @selectOneImge="receiveImg"></select-image>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'),
      dialogVisible: false,
      imageIndex: -1
    }
  },
  methods: {
    // closeDialog () {
    //   console.log(this.dialogVisible)
    //   //   event.stopPropagation()
    //   this.dialogVisible = false
    // },
    receiveImg (url) {
      this.$emit('selectTowImage', url, this.imageIndex)
      this.dialogVisible = false
    },
    openDialog (index) {
      this.dialogVisible = true
      this.imageIndex = index
    }
  }
}
</script>

<style lang='less' scoped>
.cover-image {
  margin: 20px;
  display: flex;
  .cover-image-item {
    border: 1px solid #ccc;
    width: 250px;
    height: 250px;
    padding: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
