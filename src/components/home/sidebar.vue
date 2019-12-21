<template>
<div class="side-bar">
    <div class="title">
        <img src="../../assets/img/logo_admin.png" alt="">
    </div>
<el-menu background-color='#353b4e' text-color='#adafb5' class="el-menu" active-text-color="#ffd04b" router>
    <el-menu-item index="/home">首页</el-menu-item>
    <el-submenu index='1'>
        <template slot='title'>文章管理</template>
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/articles">文章列表</el-menu-item>
        <el-menu-item index="/home/comment">评论管理</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
    </el-submenu>
    <el-submenu index='2'>
        <template slot='title'>粉丝管理</template>
        <el-menu-item index="fansData">图文数据</el-menu-item>
        <el-menu-item index="fansProfile">粉丝概况</el-menu-item>
        <el-menu-item index="fansPicture">粉丝画像</el-menu-item>
        <el-menu-item index="fansList">粉丝列表</el-menu-item>
    </el-submenu>
    <el-menu-item index="/home/account">账户信息</el-menu-item>
</el-menu>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.side-bar{
    width: 300px;
    .el-menu {
        border-right: none;
    }
    .title {
        background-color: #2e2f32;
        text-align: center;
        img {
            height: 35px;
        }
        padding: 10px 0 ;
    }
}

</style>
