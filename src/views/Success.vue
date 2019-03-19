<template>

    <Card>

        <h1>Success!</h1>

        <p>Account #{{ account.accountNumber }} for {{ fullName }} was successfully updated.</p>

        <div class="text-centered">
            <router-link to="/" class="button" title="Return to home page">Return Home</router-link>
        </div>

    </Card>

</template>




<script>

    import { mapActions, mapGetters, mapState } from 'vuex';

    import { Card } from '@/components';

    export default {

        name: 'Success',
        components: {

            Card

        },
        computed: {

            ...mapState({

                account: state => state.selectedAccount
                
            }),
            ...mapGetters([

                'fullName'

            ])

        },
        methods: {

            ...mapActions([

                'clearAccounts'

            ])

        },
        beforeRouteLeave(to, from, next) {

            this.clearAccounts();
            
            next();

        }

    }

</script>




<style lang="scss" scoped>

    @import '~@/assets/css/success';

</style>