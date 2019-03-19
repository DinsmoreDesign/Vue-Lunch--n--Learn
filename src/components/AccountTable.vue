<template>

    <table>
        <thead>
            <tr>

                <th v-for="(header, index) in headers" :key="index">{{ header }}</th>

            </tr>
        </thead>
        <tbody>

            <tr v-for="account in accounts" :key="account.accountNumber">
                <td>{{ account.accountNumber }}</td>
                <td>{{ account.member.email }}</td>
                <td>{{ account.estatements.eligible ? 'Yes' : 'No' }}</td>
                <td>{{ account.estatements.disclosureAccepted ? 'Yes' : 'No' }}</td>
                <td>{{ account.estatements.enrollmentStarted ? 'Yes' : 'No' }}</td>
                <td>
                    <button type="button" :title="`Select account number ${ account.accountNumber }`" @click="handleSelect(account.accountNumber)">Select</button>
                </td>
            </tr>

        </tbody>
    </table>

</template>





<script>

    export default {

        props: {

            headers: {
                type: Array,
                required: true
            },
            accounts: {
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

    table {
        width: 100%;
        border-spacing: 0;

        td,
        th {
            border: 1px solid #73869a;
            padding: 0.5rem;
            text-align: center;
        }

        tr:nth-child(even){
            background-color: #FFF;
        }

        tr:hover {
            background-color: #EFEFEF;
        }

        th {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            background-color: #73869a;
            color: #FFF;
        }

    }

    button {
        border: 2px solid #73869a;
        padding: 0.5rem;
        background: none;
        font-size: 1.2rem;
        color: #73869a;
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
            color: #FFF;
            background: #73869a;
        }

    }

</style>