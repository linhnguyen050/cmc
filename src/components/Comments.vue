<template>
    <layout-default>
        <div class="action">
            <b-table :fields="fields" :items="items" foot-clone>
                <template v-slot:cell(actions)="data">
                    <b-link :href="`/comments/${data.item.id}`">
                        <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
                    </b-link>
                    <b-link href="" @click="deleteComment(data.item.id)">
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
            { key: 'post_id', label: 'Posts_Id'},
            { key: 'actions', label: 'Actions' }
        ],
        items: []
      }
    },
     async created() {
        await this.getItems();
    },
    methods: {
        deleteComment: async function(id){
            const xoa = confirm('Bạn có chắc chắn muốn xoá không?')
                if(xoa == true ){
                    const ketqua1 = await axios.delete('http://localhost:9000/api/comment/'+id)
                    
                    if (ketqua1.data.success) {
                        this.getItems()
                    }
                }
        },
        async getItems() {
            const ketqua = await axios.get('http://localhost:9000/api/comment')
            if(ketqua.status == 200) {
                this.items = ketqua.data
            }
        }
    }
  
}
</script>