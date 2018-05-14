<template>
	<div class="admin">
        <el-table :data="data.data" border>
            <el-table-column type="expand">
                <template scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="文章主体">
                            <div v-html="props.row.content" style="border: 1px solid lightgray;">{{ props.row.content }}</div>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="id" width="140"></el-table-column>
            <el-table-column prop="title" label="标题" width="240"></el-table-column>
            <el-table-column prop="introduce" label="文章介绍"></el-table-column>
            <el-table-column prop="date" label="创建日期" width="120"></el-table-column>
            <el-table-column prop="view" label="浏览次数" width="120"></el-table-column>
            <el-table-column label="操作" width="240">
                <template scope="scope">
                    <el-button size="mini" @click='mod(scope.row.id)'>编辑</el-button>
                    <el-button size="mini" type="danger" @click='del(scope.row.id)'>删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              layout="total, prev, pager, next, jumper"
              :total="data.count[0]['count(id)']">
            </el-pagination>
        </div>
	</div>
</template>

<script>
import axios from '~/plugins/axios'

export default{
	layout: 'admin',
	head () {
        return {
            title: 'admin'
        }
    },
    data(){
        return{
            currentPage4: 1,
        }
    },
    async asyncData ({redirect,req}) {
        if(req.session.isLogin){
            let { data } = await axios.get('/api/admin');
            return {data:data};
        }else{
            redirect('/admin/login');
        }
    },
    methods:{
        del(id) {
            const self = this;
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                axios.get(`/api/admin/del?id=${id}`).then(function (res) {
                    if(res.data.is){
                        self.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        for(let i=0; i<self.data.length; i++){
                            if(self.data[i].id == id){
                                self.data.splice(i,1);
                            }
                        }
                    }else{
                        self.$message({
                            type: 'error',
                            message: '删除失败'
                        });  
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        mod(id) {
            window.location.href='/admin/mod?id='+id;
        },
        handleCurrentChange(current) {
            var self = this;
            axios.get(`/api/admin?current=${current}`).then(function (res) {
                self.data = res.data;
            });
        }
        
    },
}
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
.el-aside {
    color: #333;
}
.el-form-item,
.el-form-item__content {
    width: 100%;
}
.el-form-item__label{
    font-size: 25px;
    font-weight: bolder;
}
.admin{
    width: 100%;
}
.block{
    margin: 20px auto;
    text-align: center;
}
</style>