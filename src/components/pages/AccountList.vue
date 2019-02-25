<template>

    <Card>

        <h1>Eligible Accounts</h1>
        <p>If one of your accounts is not listed, contact BOSS at (602) 335-2677.</p>

        <table>
            <thead>
                <tr>
                    <th>Account Number</th>
                    <th>Email</th>
                    <th>Eligible</th>
                    <th>Disclosure Accepted</th>
                    <th>Enrollment Started</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="account in value" :key="account.accountNumber">
                    <td>{{ account.accountNumber }}</td>
                    <td>{{ account.email }}</td>
                    <td>{{ account.eligible ? 'Yes' : 'No' }}</td>
                    <td>{{ account.disclosureAccepted ? 'Yes' : 'No' }}</td>
                    <td>{{ account.enrollmentStarted ? 'Yes' : 'No' }}</td>
                    <td>
                        <button type="button" :title="`Select account number ${ account.accountNumber }`" @click="handleSelect(account.accountNumber)">Select</button>
                    </td>
                </tr>
            </tbody>
        </table>

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
                type: Array,
                required: true
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