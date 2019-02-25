<template>

    <Card>

        <h1>Eligible Accounts</h1>
        <p>If one of your accounts is not listed, contact BOSS at (602) 335-2677.</p>

        <AccountTable
            :headers="accountHeaders"
            :accounts="value"
            @select="handleSelect"
        />

    </Card>

</template>




<script>

    import { AccountTable, Card } from '@/components';

    export default {

        components: {

            AccountTable,
            Card

        },
        props: {
            
            value: {
                type: Array,
                required: true
            }

        },
        data() {
            return {

                accountHeaders: [
                    'Account Number',
                    'Email',
                    'Eligible',
                    'Disclosure Accepted',
                    'Enrollment Started',
                    'Actions'
                ]

            }
        },
        methods: {

            handleSelect(accountNumber) {

                this.$emit('select', accountNumber);

            }

        }

    }

</script>




<style lang="scss" scoped>

    @import '../../assets/css/accountList';

</style>