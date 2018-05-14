<template>
    <div>     
        <div class="message">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
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
            title: 'Message'
        }
    },
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
        
    }
    
}
</script>

<style scoped>

</style>
