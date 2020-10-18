<template>
    <layout-default>
        <div class="container">
            <h1>Posts</h1>
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Title</h5>
                </div>
                <div class="card-body">
                    <input type="text" v-model="title" class="form-control" placeholder="title">
                    <p v-if="title == '' && isClick">Bạn chưa nhập title</p>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Content</h5>
                </div>
                <div class="card-body">
                    <textarea class="form-control" rows="4" v-model="content" placeholder="content"></textarea>
                    <p v-if="content == '' && isClick">Bạn chưa nhâp content</p>
                    <span v-if="msg">{{msg}}</span>
                </div>
                <div class="btn-post">
                    <b-button @click="post" pill variant="success">POST</b-button>
                 </div>
            </div> 
        </div>
    </layout-default>
</template>
<script>
import LayoutDefault from '@/layout/Admin'
import axios from 'axios'
export default {
     components: {
         LayoutDefault,
     },
    data: function() {
        return {
            title: '',
            content: '',
            msg:'',
            isClick: false
        }
    },

    methods: {
        post:function() {
            const that = this
            this.isClick = true
            if(this.content != '' && this.title != ''){
                const dataPost = {
                    title: this.title,
                    content: this.content,
                    thumb_url: 'kikiki',
                    auth_id: localStorage.getItem('userId'),

                }
            axios.post('http://localhost:9000/api/post', dataPost)
                .then(function(ketqua){
                    if(ketqua.data.success == true){
                        that.$router.push('posts')
                    }
                    else{
                        that.msg = 'Không thành công '
                    }
                })
            }
        }
    }
}
</script>
