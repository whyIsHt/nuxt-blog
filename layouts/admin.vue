<template>
    <div class="bg">
        <el-container style="height: 800px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <!-- <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>首页</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">排序</template>
                            <el-menu-item index="1-1"><i class="el-icon-caret-top">日期up</i></el-menu-item>
                            <el-menu-item index="1-2"><i class="el-icon-caret-bottom">日期down</i></el-menu-item>
                            <el-menu-item index="1-3"><i class="el-icon-view">浏览人数</i></el-menu-item> 
                        </el-menu-item-group>
                    </el-submenu> -->
                    <a href="/admin">
                        <el-menu-item index="1">
                            <i class="el-icon-location"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                    </a>
                    <a href="/admin/add">
                        <el-menu-item index="2">
                            <i class="el-icon-circle-plus-outline"></i>
                            <span slot="title">添加文章</span>
                        </el-menu-item>
                    </a>
                </el-menu>
            </el-aside>
            <el-main>
               <nuxt/>
            </el-main>
        </el-container>
        <MyFooter/>
    </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'

export default {
    components: {
        MyFooter
    },
    methods: {
        
    },
}
</script>

<style>
.bg{
  width: 100%;
  height: 100%;
  background-color: lightgray;
  padding-top: 20px;
}
.container
{
  margin: 0;
  width: 100%;
/*   padding: 100px 0; */
  text-align: center;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
.el-aside {
    color: #333;
}

</style>
