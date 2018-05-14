<template>
	<div class="context">
		<div class="blog">
			<article>
				<div class="info">
	                <h1>{{data.title}}</h1>
	                <i class="el-icon-time"><time datetime="2017-10-22">{{data.date}}</time></i>
	                <i class="el-icon-view"><span class="view_num">{{data.view}}次浏览</span></i>
	                <i class="el-icon-message"><span class="review_num">{{data.review}}条评论</span></i>
	            </div>
	            <div class="content" v-html="data.content">
	            	{{data.content}}
	            </div>
			</article>	
		</div>
	</div>
</template>

<script>
import axios from '~/plugins/axios'
export default{
	head () {
        return {
            title: 'Blog'
        }
    },
    async asyncData ({query}) {
        let { data } = await axios.get(`/api/users/blog?id=${query.id}`)
        return { data: data[0] }
    },
}
</script>

<style scoped>
.context{
    background: none;
}
.blog{
    width: 80%;
    min-height: 700px;
    margin: 0 auto;
    /* border: 1px solid black; */
    background-color: white;
    padding-top: 20px;
    margin-bottom: 40px;
    border-radius: 30px;
    padding: 20px;
    background-color: #E2E2E2;
    position: relative;
}
.info{
    text-align: center;
}
.info i{
    margin: 0 20px 20px;
}
.article_theme{
    width: 80%;
    margin: 10px auto;
}
.content{
	text-align: left;
	width: 80%;
	margin: 0 auto;
	box-sizing: border-box;
    padding: 20px;
}
</style>