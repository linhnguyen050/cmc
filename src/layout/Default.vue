<template>
    <div class="container-fuil">
        <div class="row">
            <div class="col-12 col-sm-4 col-md-3">
                <ul>
                    <li>Users</li>
                    <li>Posts</li>
                    <li>Comments</li>
                </ul>
            </div>
            <div class="col-12 col-sm-8 col-md-9">
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>