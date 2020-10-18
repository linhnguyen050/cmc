<template>
    <layout-default>
        <div class="action">
            <b-table :fields="fields" :items="items" foot-clone>
                <template v-slot:cell(actions)="data">
                    <b-link :href="`/users/${data.item.id}`">
                        <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
                    </b-link>
                    <b-link @click="deleteUser(data.item.id)">
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
            { key: 'id', label: 'ID USER'},
            { key: 'fullname', label: 'Full Name'},
            { key: 'username', label: 'User Name'},
            { key: 'email', label: 'E-mail'},
            { key: 'actions', label: 'Actions' }
        ],
        items: []
      }
    },
    async created() {
        const ketqua = await axios.get('http://localhost:9000/api/user')
            if(ketqua.status == 200) {
                this.items = ketqua.data
            }
    },
    methods: {
        deleteUser: async function(id){
             const xoa = confirm('Ban co chac muon  xoa?')
             if(xoa == true){
            const ketqua1 = await  axios.delete('http://localhost:9000/api/user/'+ id) 
               this.items = ketqua1.data
               const ketqua = await axios.get('http://localhost:9000/api/user')
            if(ketqua.status == 200) {
                this.items = ketqua.data
            }
            }
            
        }
    } 
}
</script>