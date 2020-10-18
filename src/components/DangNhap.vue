<template>
  <div class="container-fluid">
      <div class="row justify-content-center ">
          <div class="col-12 col-sm-4 col-md-3 row-container ">
                <form>
                    <h2>Đăng Nhập</h2>
                    <div class="form-group">
                        <b-input-group class="mb-2">
                            <b-input-group-prepend is-text>
                                <b-icon icon="person-fill"></b-icon>
                            </b-input-group-prepend>
                            <b-form-input type="text" placeholder="UserName" v-model="username"></b-form-input>
                            <p v-if="username == '' && isClick">Bạn chưa nhập username</p> 
                        </b-input-group>  
                    </div>
                    <div class="form-group">
                            <b-input-group class="mb-2">
                                <b-input-group-prepend is-text>
                                    <b-icon icon="lock"></b-icon>
                                </b-input-group-prepend>
                                <b-form-input type="password" placeholder="Password" v-model="password"></b-form-input>
                                <p v-if=" password == '' && isClick " >Ban chưa nhập Password</p>
                            </b-input-group>
                    </div>
                    <p v-if="error">{{error}}</p>
                    <div class="form-group">
                        <b-button class="form-control" pill variant="success" @click="dangnhap">Button</b-button>
                    </div>
                    
                </form>
          </div>
      </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    data: function() {
        return {
            password: '',
            username: '',
            isClick: false,
            error: ''
        }
    },
    methods: {
        dangnhap: function() {
            this.isClick = true
            const that = this
            if(this.password != '' && this.username != '') {
                const dataPost = {
                    username:this.username,
                    password: this.password
                }
                axios.post('http://localhost:9000/api/auth' , dataPost)
                .then(function(ketqua){
                    if(ketqua.data.success == true) {
                        that.$router.push('admin')
                    }
                    else {
                        that.error = 'Thong tin sai'
                    }
                })
            }
        }
    }

}
</script>
