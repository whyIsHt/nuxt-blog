<template>
	<div class="about">
		<el-row>
		  	<el-col :span="7">
		  		<div class="col_left">
		  			<!-- <div class="img">
		  				<img src="~assets/img/logo.png" alt="">
		  			</div>
		  			<p class="name">ht的简历</p>
		  			<div class="contact">
		  				<div class="contact_title"><i class="el-icon-caret-right">Contact. 联系方式</i></div>
		  				<div title='qq'>1104672757</div>
		  			</div> -->
		  			<el-card class="box-card">
					  	<div slot="header" class="clearfix">
					    	 <img src="~assets/img/logo.png" class="image">
					  	</div>
					  	<div v-for="index in arr" :key="index" class="arr">
					    	<i class="el-icon-caret-right">{{index}}</i>

					    	<div style="padding: 14px;" v-show="index=='Contact'">
						        <div v-for="con in contact" :key="con" class="contact">
						        	<i class="el-icon-plus">{{con[0]}}:</i>{{con[1]}}
						        </div>
						    </div>
							
							<div style="padding: 14px;" v-show="index=='profession'">
						        <button type="button">profession</button>
						    </div>

						    <div style="padding: 14px;" v-show="index=='self-introduction'">
						        <p>dasdasdasdasd</p>
						        <p>dasdasdasdasd</p>
						        <p>dasdasdasdasd</p>
						        <p>dasdasdasdasd</p>
						    </div>

					  	</div>
					  	
					</el-card>
		  		</div>
		  	</el-col>
		  	<el-col :span="17"><div class="col_right"></div></el-col>
		</el-row>

	</div>
</template>

<script>
export default {
    layout: 'about',
    head () {
        return {
            title: 'About me'
        }
    },
    data(){
        return {
            arr:['Contact','profession','self-introduction'],
            // contact:[{qq: '1104672757'},{wechar: 'whyht0802'},{weibo: '谁偷了我的玫瑰'}],
            contact:[
            	['qq','1104672757'],
            	['wechar','whyht0802'],
            	['weibo','谁偷了我的玫瑰i']
            ]
        }
    },
}	
</script>

<style>
.about{
	width: 60%;
	height: 1200px;
	background-color: white;
	margin: 0px auto;
	border-radius: 70px;
	box-sizing: border-box;
	padding: 25px;
}
.el-row{
	height: 100%;
	box-sizing: border-box;
}
.el-col{
	height: 100%;
	/* border: 1px solid red; */
}
.col_left{
	height: 100%;
  	background: lightblue;
  	border-right: 5px solid lightgreen;
}
.img{
	width: 50%;
	margin: 0 auto;
}
.image{
	width: 100%;
	height: 100%;
	border-radius: 50%;
	margin-top: 20px;
}
.col_left p{
	text-align: center;
	font: 30px bolder;
}
.col_right{
	height: 100%;
	background: lightyellow;
  	border-left: 5px solid lightgreen;
}
.arr i{
	font-size: 30px;
}
.contact{
	margin: 10px auto;
	color: red;
	font-size: 15px;
}
.contact i{
	width: 90px;
	font-size: 20px;
}
</style>