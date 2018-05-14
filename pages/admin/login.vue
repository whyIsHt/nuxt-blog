<template>
	<form @submit.prevent="submit">
		账号：<input type="text" name="user" v-model="userinfo.user" placeholder="账号">
		密码：<input type="password" name="pass" v-model="userinfo.pass" placeholder="密码">
		<input type="submit" value="登录">
		<!-- {{users.data}} -->
	</form>
</template>

<script>
import axios from '~/plugins/axios'
import qs from 'qs';

export default{
	layout: 'about',
	head () {
        return {
            title: 'admin login'
        }
    },
    data(){
    	return{
    		userinfo: {
	            user: '',
	            pass: ''
	        }
    	}
    },
    methods: {
        submit: function() {
        	const self = this;
          	var formData = qs.stringify(this.userinfo); // 这里才是你的表单数据
          	axios.post('/api/admin/login',formData).then(function (res) {
          		if(res.data.is){
          			window.location.href='/admin';
          		}else{
          			alert(res.data.msg);
          		}
			})
			.catch(function (error) {
			    console.log(error);
			});
        }
    }

}
</script>

<style>

</style>