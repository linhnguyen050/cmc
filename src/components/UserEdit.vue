<template>
    <layout-default>
        <div class="card">
            <div class="card-header">
                <h5 class="card-title mb-0">User</h5>
            </div>
            <div class="card-body">
                <b-alert v-if="msg == 1" show variant="success">Success Alert</b-alert>
                <b-alert v-if="msg == 2" show variant="danger">Danger Alert</b-alert>
                <div class="row">
                    <div class="col-10">
                        <b-form @submit.stop.prevent="onSubmit">
                            <b-form-group id="example-input-group-1" label="Fullname:" label-for="example-input-1">
                                <b-form-input
                                    id="fullname"
                                    name="fullname"
                                    v-model="fullname"
                                    v-validate="{ required: true, min: 3 }"
                                    :state="validateState('fullname')"
                                    aria-describedby="input-1-live-feedback"
                                    data-vv-as="Name"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-1-live-feedback">{{ veeErrors.first('fullname') }}</b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group id="example-input-group-1" label="Password:" label-for="example-input-1">
                                <b-form-input
                                    id="password"
                                    name="password"
                                    v-model="password"
                                    v-validate="{ required: true, min: 3 }"
                                    :state="validateState('password')"
                                    aria-describedby="input-1-live-feedback"
                                    data-vv-as="Name"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-1-live-feedback">{{ veeErrors.first('password') }}</b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group id="example-input-group-1" label="Email:" label-for="example-input-1">
                                <b-form-input
                                    id="email"
                                    name="email"
                                    v-model="email"
                                    v-validate="{ required: true, min: 3 }"
                                    :state="validateState('email')"
                                    aria-describedby="input-1-live-feedback"
                                    data-vv-as="Name"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-1-live-feedback">{{ veeErrors.first('email') }}</b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group id="example-input-group-1" label="Username:" label-for="example-input-1">
                                <b-form-input
                                    id="username"
                                    name="username"
                                    v-model="username"
                                    v-validate="{ required: true, min: 3 }"
                                    :state="validateState('username')"
                                    aria-describedby="input-1-live-feedback"
                                    data-vv-as="Name"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-1-live-feedback">{{ veeErrors.first('username') }}</b-form-invalid-feedback>
                            </b-form-group>
                            
                            <div class="btn-post">
                                <b-button type="submit" variant="primary">Submit</b-button>
                            </div>
                        </b-form>
                    </div>
                </div>
            </div>
        </div>
    </layout-default>
</template>
<script>
import LayoutDefault from '@/layout/Admin'
import axios from 'axios';
export default {
    components: {
        LayoutDefault
    },

    data: function(){
        return {
            fullname: '',
            password: '',
            email:'',
            username: '',
            isClick: '',
            msg: 0
        }
    },
    async created() {
        
        const id = this.$route.params.id
        const comment = await axios.get('http://localhost:9000/api/user/' + id)
            if(comment.status == 200) {
                this.fullname = comment.data.data.fullname
                this.password = comment.data.data.password
                 this.username = comment.data.data.username
                this.email = comment.data.data.email
            }
    },
    methods: {
        validateState(ref) {
                if (
                    this.veeFields[ref] &&
                    (this.veeFields[ref].dirty || this.veeFields[ref].validated)
                ) {
                    return !this.veeErrors.has(ref);
                }
                return null;
    },
        onSubmit: async function() {
            const valid = await this.$validator.validateAll();
            console.log(valid)
            if (!valid) {
                return;
            }
            const id = this.$route.params.id
            const result = await axios.put('http://localhost:9000/api/user/' + id, {
                fullname: this.fullname,
                password: this.password,
                username: this.username,
                email: this.email
            })

            if (result.data.success) {
                this.msg = 1;
            } else {
                this.msg = 2;
            }   
        }
    }
}
</script>




