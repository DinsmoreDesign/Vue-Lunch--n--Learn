<template>

    <div class="nav-item">
        <router-link :to="url" :title="`Visit ${title} page.`">{{ title }}</router-link>
    </div>

</template>




<script>

    export default {
        
        props: {

            url: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }

        }

    }

</script>




<style lang="scss" scoped>

    .nav-item {
        padding: 1rem;
        align-self: center;
    }

</style>