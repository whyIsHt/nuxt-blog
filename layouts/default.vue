<template>
    <div class="bg">
        <el-row>
            <el-col :span="2">
                <div class="left">
                    <div class="left_pic">
                        <span class="el-icon-loading"></span>
                    </div>
                    <div class="left_name">
                        <div class="left_name_text">TBLOG&nbsp;HOME</div>
                    </div>
                </div>
            </el-col>
            
            <el-col :span="15">
                <div class="content">
                    <nuxt/>
                </div>
            </el-col>

            <el-col :span="1">
                <div class="nav">
                    <div class="item">
                        <nuxt-link to='/'><font>首页</font></nuxt-link>
                    </div>
                    <div class="item">
                        <nuxt-link to='/'><font>实验</font></nuxt-link>
                    </div>
                    <div class="item">
                        <nuxt-link to='/message'><font>留言</font></nuxt-link>
                    </div>
                    <div class="item">
                        <nuxt-link to='/about' target="_blank"><font>简介</font></nuxt-link>
                    </div>
                </div>
            </el-col>
                
            <el-col :span="6">
                <div class="bar">
                    <div class="select">
                        <transition name="el-zoom-in-center">
                            <el-input placeholder="请输入关键词" v-model="input_txt" v-show='select_show' 
                            class="input_select" @blur='leave' v-focus="true"></el-input>
                        </transition>
                        <el-button icon="el-icon-search" @click='select' class='button_select'>
                            <span @mouseover='select_show=true;'>
                                <nuxt-link :to="{path:'select',query:{wd:input_txt}}">站内搜索</nuxt-link>
                            </span>
                        </el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'

export default {
    components: {
        MyFooter
    },
    data(){
        return {
            input_txt:'',
            select_show:false,
        }
    },
    methods:{
        leave:function(){
            if(!this.input_txt){
                this.select_show=false;
            }
        },
    },
    directives:{
        focus: function (el, option) {
            var defClass = 'el-input', defTag = 'input';
            var value = option.value || true;
            if (typeof value === 'boolean'){
                value = { cls: defClass, tag: defTag, foc: value };
            }else{
                value = { cls: value.cls || defClass, tag: value.tag || defTag, foc: value.foc || false };
            }
            if (el.classList.contains(value.cls) && value.foc){
                el.getElementsByTagName(value.tag)[0].focus();
            }
        }
    },
}
</script>

<style scoped>
.bg{
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-image: url('~assets/img/bg.jpg');   
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.el-row{
    height: 100%;
}
.el-col{
    height: 100%;
    border-radius: 20px; 
    box-shadow:0 0 30px 10px rgba(255,255,255,.8) inset;
}
.left{
    width: 80%;
    margin: 50% auto;
}
.left_pic{
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin: 10px auto;
    text-align: center;
    line-height: 80px;
    background: -webkit-radial-gradient(#8C2539, #B5002E, #8C2539);
    background: -o-radial-gradient(#8C2539, #B5002E, #8C2539);
    background: -moz-radial-gradient(#8C2539, #B5002E, #8C2539);
    background: radial-gradient(#8C2539, #B5002E, #8C2539);
}
.left_name{
    width: 80%;
    margin: 0 auto;
    text-align: center;
}
.left_name_text{
    width: 50px;
    margin: 0 auto;
    font-size: 50px;
    word-wrap:break-word;
    color: #F2FFF2;
}
.content{
    width: 100%;
    height: 100%;
    padding: 50px;
    box-sizing: border-box;
    overflow: auto;
}
.content::-webkit-scrollbar {
    width: 5%;
    height: 16px;
}
.content::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    border-radius: 40px;
    background-image: url('~assets/img/scrollbg_bottom.jpg');   
}
.content::-webkit-scrollbar-thumb{
    height: 20px;
    border-radius: 40px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-image: url('~assets/img/scrollbg_top.jpg');   
}

.nav{
    width: 100%;
    height: 100%;
}
.item{
    width: 100%;
    height: 25%;
    padding: 100% 0;
    box-sizing: border-box;
    border-radius: 35px;
    text-align: center; 
}
.item font{
    font-size: 28px;
    color: #fff;
    cursor: pointer;
}
.item font:hover{
    border-radius: 20px;
    color: #2D9EF0;
    border-bottom: 3px solid;
}

.bar{
    width: 100%;
    height: 100%;
    background: url('~assets/img/barbg.png') no-repeat 70% 100%; 
}
.select{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.button_select{
    width: 60%;
    margin-left: 20%;
    font-size: 18px;
    background: none;
}

</style>
