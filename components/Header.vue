<template>
    <div class="container">
        <div class="top">
            <el-menu theme="light" class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1"><nuxt-link to='/'><i>首页</i></nuxt-link></el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i>分类</i></template>
                    <el-menu-item index="2-1">分类1</el-menu-item>
                    <el-menu-item index="2-2">分类2</el-menu-item>
                    <el-menu-item index="2-3">分类3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><nuxt-link to='/'><i>留言</i></nuxt-link></el-menu-item>
                <el-menu-item index="4"><nuxt-link to="/about" target="_Blank"><i>关于</i></nuxt-link></el-menu-item>
            </el-menu>
        </div>
        <div class="head">
            <div class="introduce">
                这里是谁谁谁
            </div>
            <div class="autograph">
                <img src="~assets/img/logo.png" alt="" style="width:100px;height:100px;border-radius:50%; overflow:hidden;">
                <p>Write the Code. Change the World.</p>
            </div>
        </div>
        {{users}}
    </div>
</template>
<script>
import axios from '~/plugins/axios'

export default{
    async asyncData () {
        let { data } = await axios.get('/api/test')
        return { users: data }
    }
        
}
</script>
<style>
.container{
    width: 100%;
    height: 100%;
}
.top{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
}
.el-menu{
    padding-left: 180px;
    font-weight: bolder;
    background:rgba(0,0,0,0.4);
}
.el-menu i{
    font-size: 25px;
    color: white;
}
.el-menu i:hover{
    color: gray;
}
.el-menu .el-menu-item,.el-submenu{
    margin-left: 70px;
    border-radius: 40px;
    min-width: 30px;
}
.el-submenu .el-menu-item{
    margin-left: 0px;
    background-color: lightblue;
}
.head{
    width: 100%;
    height: 650px;
/*     border: 1px solid red; */
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    background-image: url('~assets/img/headbg.jpg');
    margin-bottom: 50px;
}
.introduce{
    color: white;
    font-size: 65px;
    font-family: "Source Sans Pro", Arial, sans-serif;
    letter-spacing:8px;
    position: relative;
    margin: 0 auto;
    top: 240px;
}
.autograph{
    width: 1000px;
    height: 160px;
    background-color: lightblue;
    background:rgba(152,245,255,0.4);
    padding-top: 40px;
    position: relative;
    margin: 0 auto;
    top: 410px;
}
</style>