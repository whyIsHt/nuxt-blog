<template>
	<div class="admin">
        <el-form ref="form" :model="data" label-width="80px">
            <el-form-item label="文章标题">
                <el-input v-model="data.title"></el-input>
            </el-form-item>
            <el-form-item label="文章介绍">
                <el-input v-model="data.introduce"></el-input>
            </el-form-item>
            <el-form-item label="文章主体">
                <el-button @click="getUEContent()">获取内容</el-button>
                <UE :defaultMsg=data.content :config=config :id=ue2 ref="ue"></UE>
            </el-form-item>
            <el-button type="primary" @click="mod">立即修改</el-button>
            <el-button @click='home'>取消</el-button>
        </el-form>
	</div>
</template>
<script>
import axios from '~/plugins/axios'
import qs from 'qs'
import UE from '~/components/ue.vue'
export default{
	layout: 'admin',
    components: {UE},
	head () {
        return {
            title: 'admin add',
        }
    },
    asyncData ({redirect,req}) {
        if(req.session.isLogin){
            return axios.post(`/api/admin/modInfo?id=${req.query.id}`).then(function (res) {
                return { data: res.data[0] }
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{
            redirect('/admin/login');
        }
    },
    data() {
        return {
            config: {
              initialFrameWidth: null,
              initialFrameHeight: 350
            },
            ue2: "ue2"
        }
    },
    methods: {
        mod: function() {
            let content = this.$refs.ue.getUEContent();
            this.data.content = content;
            var formData = qs.stringify(this.data); // 这里才是你的表单数据
            axios.post('/api/admin/mod',formData).then(function (res) {
                window.location.href='/admin';
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        getUEContent() {
            let content = this.$refs.ue.getUEContent(); // 调用子组件方法
            this.$notify({
                title: '获取成功，可在控制台查看！',
                message: content,
                type: 'success'
            });
            console.log(content)
        },
        home(){
            window.location.href='/admin';
        }
    }
}
</script>

<style>

</style>