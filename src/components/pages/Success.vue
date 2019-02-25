<template>

    <Card>

        <h1>Success!</h1>

        <p>Account #{{ value.accountNumber }} for {{ value.name }} was successfully updated.</p>

        <div class="text-centered">
            <a href="/" class="button" title="Return to home page">Return Home</a>
        </div>

    </Card>

</template>




<script>

    import { Card } from '@/components';

    export default {

        components: {

            Card

        },
        props: {
            
            value: {
                type: Object,
                required: true
            }

        }

    }

</script>




<style lang="scss" scoped>

    @import '../../assets/css/success';

</style>