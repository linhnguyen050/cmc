<template>
    <layout-default>
        <div class="action">
            <b-table :fields="fields" :items="items" foot-clone>
                <template v-slot:cell(actions)="data">
                    <b-link :href="`/posts/${data.item.id}`">
                        <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
                    </b-link>
                    <b-link href="" @click="deletePosts(data.item.id)">
                        <b-icon icon="trash" aria-hidden="true"></b-icon>
                    </b-link>
                </template>
            </b-table>
        </div>
    </layout-default>
</template>
<script>
import axios from 'axios'
import LayoutDefault from '@/layout/Admin'
export default {
    components: {
        LayoutDefault
    },
     data() {
      return {
        fields: [
            // A column that needs custom formatting
            { key: 'id', label: 'IDPosts'},
            { key: 'title', label: 'Title'},
            { key: 'content', label: 'Content'},
            { key: 'auth_id', label: 'Auth_ID'},
            { key: 'actions', label: 'Actions' }
        ],
        items: []
      }
    },
    async created() {
        const ketqua = await axios.get('http://localhost:9000/api/post')
            if(ketqua.status == 200) {
                this.items = ketqua.data
            }
    },
    methods: {
        deletePosts: async function(id){
            const xoa = confirm('Bạn có chắc chắn muốn xoá không?')
                if(xoa == true ){
                    const ketqua1 = await axios.delete('http://localhost:9000/api/post/'+id)
                        this.items = ketqua1.data
                        const ketqua = await axios.get('http://localhost:9000/api/post')
                            if(ketqua.status == 200) {
                                this.items = ketqua.data
                            }
                }
        }
    }
  
}
</script>