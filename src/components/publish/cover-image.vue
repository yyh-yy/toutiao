<template>
  <div class="cover-image" @click="openDialog">

    <div class="cover-image-item" v-for="(item,index) in list" :key="index">
      <img :src="item ? item :defaultImg" alt />
    </div>
    <el-dialog title="选择封面图片"
    :visible='dialogVisible'
    @close='closeDialog'
    > </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'),
      dialogVisible: false
    }
  },
  methods: {
    closeDialog (event) {
    //   event.stopPropagation()
      this.dialogVisible = false
    },
    openDialog () {
      this.dialogVisible = true
    }
  }

}
</script>

<style lang='less' scoped>
.cover-image {
  margin: 20px 100px;
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
