<template>
	<div class="admin">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="文章标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="文章介绍">
                <el-input v-model="form.introduce"></el-input>
            </el-form-item>
            <el-form-item label="文章主体">
                <el-button @click="getUEContent()">获取内容</el-button>
                <UE :config=config :id=ue1 ref="ue"></UE>
            </el-form-item>
            <el-button type="primary" @click="submit">立即创建</el-button>
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
    async asyncData ({redirect,req}) {
        if(!req.session.isLogin){
            redirect('/admin/login');
        }
    },
    data() {
        return {
            form: {
                title:'',
                introduce:'',
                content:''
            },
            config: {
              initialFrameWidth: null,
              initialFrameHeight: 350
            },
            ue1: "ue1"
        }
    },
    methods: {
        submit: function() {
            let content = this.$refs.ue.getUEContent();
            this.form.content = content;
            var formData = qs.stringify(this.form); // 这里才是你的表单数据
            axios.post('/api/admin/add',formData).then(function (res) {
                alert(res.data.msg);
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