<template>
    <layout-default>
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Comment</h5>
                </div>
                <div class="card-body">
                    <div class="card-body-input">
                        <input class="form-control form-control-lg mb-3" type="text" placeholder="title" v-model="title">
                    </div>
                    <div class="card-body-input">
                        <b-form-select v-model="selected"  >
                            <option v-for="(post,ind) in item" :value="post.id" :key="ind">{{post.title}}</option>
                        </b-form-select>
                    </div>
                    <br>
                    <div class="card-body-input">
                        <textarea class="form-control" rows="4" v-model="content" placeholder="content" ></textarea>
                        <p v-if="content == '' && isClick">Bạn chưa nhâp content</p>
                        <span v-if="msg">{{msg}}</span>
                    </div>
                </div>
                <div class="btn-post">
                    <b-button @click="comment" pill variant="success">POST</b-button>
                </div>
            </div>
    </layout-default>
</template>
<script>
import LayoutDefault from '@/layout/Admin'
import axios from 'axios'
export default {
    components: {
        LayoutDefault
    },
    data: function(){
        return {
            title:'',
            content: '',
            selected: '',
            isClick: false ,
            msg: '',
            item: []
        }
    },
        async created(){
                const ketqua = await axios.get('http://localhost:9000/api/post')
                    if(ketqua.status == 200){
                        this.item = ketqua.data
                    }
        },
    methods: {
        comment: function() {
            this.isClick = true
            const that = this
            if(this.content != '' && this.title != ''){
                const dataPost = {
                    content: this.content,
                    title: this.title,
                    auth_id: localStorage.getItem('userId'),
                    post_id: this.selected
                }
                axios.post('http://localhost:9000/api/comment', dataPost)
                    .then(function(ketqua){
                        if(ketqua.data.success == true) {
                            that.$router.push('comments')
                        }
                        else {
                            that.msg = 'Khong Thanh Cong'
                        }
                    })
            }
        }
    }
    
}
</script>