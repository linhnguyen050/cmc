<template>
    <div class="wrapper">
        <Sidebar/>
        <div class="main">
            <div class="navbar navbar-expand navbar-light bg-white">
                <div class="icon">
                    <b-button v-b-toggle.sidebar> <b-icon icon="list"></b-icon></b-button>
                    <form class="form-inline d-none d-sm-inline-block">
                        <input class="form-control form-control-no-border mr-sm-2" type="text" placeholder="Search projects..." aria-label="Search">
                    </form>
                </div>
                <div class="group-icon">
                    <b-icon icon="bell"></b-icon>
                    <b-icon icon="plus-circle-fill"></b-icon>
                </div>
                <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
                    <b-dropdown class="mx-1" right text="Thêm Bài">
                        <b-dropdown-item @click="themcomment">More Comment</b-dropdown-item>
                        <b-dropdown-item @click="thempost">More Post</b-dropdown-item>
                    </b-dropdown>
                </b-button-toolbar>
            </div>
            <main class="LayoutDefault__main">
                <slot/>
            </main>
        </div>  
    </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
export default {
    components: {
        Sidebar,
    },
    methods: {
        thempost: function() {
            this.$router.push('formpost')
        },
        themcomment: function() {
            this.$router.push('formcomment')
        }
    }
    
}
</script>