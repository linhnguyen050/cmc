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
                            <b-form-group id="example-input-group-1" label="Title:" label-for="example-input-1">
                                <b-form-input
                                    id="title"
                                    name="title"
                                    v-model="title"
                                    v-validate="{ required: true, min: 3 }"
                                    :state="validateState('title')"
                                    aria-describedby="input-1-live-feedback"
                                    data-vv-as="Name"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-1-live-feedback">{{ veeErrors.first('title') }}</b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group id="example-input-group-1" label="Content:" label-for="example-input-1">
                                <b-form-input
                                    id="content"
                                    name="content"
                                    v-model="content"
                                    v-validate="{ required: true, min: 3 }"
                                    :state="validateState('content')"
                                    aria-describedby="input-1-live-feedback"
                                    data-vv-as="Name"
                                ></b-form-input>
                                <b-form-invalid-feedback id="input-1-live-feedback">{{ veeErrors.first('content') }}</b-form-invalid-feedback>
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
            isClick: false ,
            title: '',
            content: '',
            msg: 0
        }
    },
    async created() {
        this.isClick = true
        const id = this.$route.params.id
        const comment = await axios.get('http://localhost:9000/api/comment/' + id)
            if(comment.status == 200) {
                this.title = comment.data.data.title
                this.content = comment.data.data.content
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
            const result = await axios.put('http://localhost:9000/api/comment/' + id, {
                title: this.title,
                content: this.content
            })

            if (result.data.success) {
                this.msg = 1;
            }
        }
    }
}
</script>