<template>

    <Card>

        <h3>Eligible Accounts</h3>
        <p>If one of your accounts is not listed, contact BOSS at (602) 335-2677.</p>

        <table>
            <thead>
                <tr>
                    <th>Account Number</th>
                    <th>Email</th>
                    <th>Eligible</th>
                    <th>Disclosure Accepted</th>
                    <th>Enrollment Started</th>
                    <th>Select</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="account in value" :key="account.accountNumber">
                    <td>{{ account.accountNumber }}</td>
                    <td>{{ account.email }}</td>
                    <td>{{ account.eligible }}</td>
                    <td>{{ account.disclosureAccepted }}</td>
                    <td>{{ account.enrollmentStarted }}</td>
                    <td>
                        <button type="button" :title="`Select account number ${ account.accountNumber }`" @click="handleSelect(account.accountNumber)">Select</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </Card>

</template>




<script>

    import axios from '@/plugins/axios';

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



            }

        }

    }

</script>




<style lang="scss" scoped>

    table {

        th {
            width: 20%;
        }

        td {
            text-align: center;
        }

    }

</style>