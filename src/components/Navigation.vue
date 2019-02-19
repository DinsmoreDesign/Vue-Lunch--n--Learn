<template>

    <nav>
        <div class="brand">
            <img alt="SwitchThink logo" src="@/assets/logo.svg">
        </div>
        <div class="nav-items">
            <slot/>
        </div>
    </nav>

</template>




<script>

    export default {
        
        

    }

</script>




<style lang="scss" scoped>

    nav {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
        display: flex;
        border-bottom: 1px solid #DDD;

        .brand {
            padding: 1rem;
            flex-grow: 1;

            img {
                width: 100%;
                max-width: 200px;
            }

        }

        .nav-items {
                display: -webkit-box;
                display: -moz-box;
                display: -ms-flexbox;
                display: -webkit-flex;
            display: flex;
        }

    }

</style>