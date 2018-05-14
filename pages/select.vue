<template>
    <div>     
        <div class="blog" :class="blogbg(index)" v-for="(data,index) in datas" :key='data.id'>
            <article>
                <div class="info">
                    <h1>{{data.title}}</h1>
                    <i class="el-icon-time"><time>{{data.date}}</time></i>
                    <i class="el-icon-view"><span class="view_num">{{data.view}}次浏览</span></i>
                    <i class="el-icon-message"><span class="review_num">{{data.review}}条评论</span></i>
                </div>
                <div class="article_theme">
                    <div class="context">
                        {{data.introduce}}
                    </div>
                    <div class="view_all"><nuxt-link :to="{path:'blog',query:{id:data.id}}" target="_blank">阅读全文</nuxt-link></div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    async asyncData ({query}) {
        let { data } = await axios.get(`/api/users/select?wd=${query.wd}`)
        return { datas: data }
    },
    head () {
        return {
            title: 'Select'
        }
    },
    methods: {
        blogbg: function (i) {
            return 'blog_bg'+this.datas[i].id%10;
        }
    }
    
}
</script>

<style scoped>
.blog{
    width: 800px;
    box-sizing: border-box;
    margin: 0 auto;
    /* border: 1px solid black; */
    background-color: white;
    margin-bottom: 40px;
    border-radius: 30px;
    padding: 10px;
    position: relative;
}
.blog_bg0{
    background-image: url('~assets/img/blogbg10.jpg'); 
}
.blog_bg1{
    background-image: url('~assets/img/blogbg01.jpg'); 
}
.blog_bg2{
    background-image: url('~assets/img/blogbg02.jpg'); 
}
.blog_bg3{
    background-image: url('~assets/img/blogbg03.jpg'); 
}
.blog_bg4{
    background-image: url('~assets/img/blogbg04.jpg'); 
}
.blog_bg5{
    background-image: url('~assets/img/blogbg05.jpg'); 
}
.blog_bg6{
    background-image: url('~assets/img/blogbg06.jpg'); 
}
.blog_bg7{
    background-image: url('~assets/img/blogbg07.jpg'); 
}
.blog_bg8{
    background-image: url('~assets/img/blogbg08.jpg'); 
}
.blog_bg9{
    background-image: url('~assets/img/blogbg09.jpg'); 
}
.blog_bg10{
    background-image: url('~assets/img/blogbg10.jpg'); 
}
.info{
    text-align: center;
    background-color: #fff;
    opacity: 0.5;
}
.info i{
    margin: 0 20px 20px;
}
.article_theme{
    width: 80%;
    margin: 10px auto;
}
.context{
    font-size: 25px;
    color: #444444;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 5px 20px;
    background-color: #fff;
    opacity: 0.6;
}
.view_all{
    text-align: center;
    margin: 0 auto;
    width: 100px;
    opacity: 0.5;
    background-color: #fff;
}
.view_all:hover{
    background-color: lightgray;
    opacity: 1;
}
</style>
