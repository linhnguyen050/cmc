<template>
    <div class="sidebar"> 
        <div>
             <ul>  
                <li>
                    <b-icon icon="person-lines-fill" aria-hidden="true"></b-icon>
                    <router-link to="/users">Users</router-link>
                </li>
                <li>
                    <b-icon icon="journal-plus" aria-hidden="true"></b-icon>
                    <router-link to="/posts">Posts</router-link>
                </li>
                <li>
                    <b-icon icon="journal-plus" aria-hidden="true"></b-icon>
                    <router-link to="/comments">Comments</router-link>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
}
</script>