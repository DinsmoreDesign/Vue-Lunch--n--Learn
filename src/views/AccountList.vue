<template>

    <Card>

        <h1>Eligible Accounts</h1>
        <p>If one of your accounts is not listed, contact BOSS at (602) 335-2677.</p>

        <AccountTable
            :headers="accountHeaders"
            :accounts="accounts"
            @select="handleSelect"
        />

    </Card>

</template>




<script>

    import { mapState, mapActions } from 'vuex';

    import { AccountTable, Card } from '@/components';

    export default {

        name: 'AccountList',
        components: {

            AccountTable,
            Card

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
        computed: {

            ...mapState({
                
                accounts: state => state.userAccounts

            })

        },
        methods: {

            ...mapActions([

                'setSelectedAccount'
                
            ]),
            handleSelect(accountNumber) {

                const account = this.accounts.find(account => account.accountNumber === accountNumber);

                this.setSelectedAccount(account);

                this.$router.push('/details');

            }

        }

    }

</script>




<style lang="scss" scoped>

    @import '~@/assets/css/accountList';

</style>