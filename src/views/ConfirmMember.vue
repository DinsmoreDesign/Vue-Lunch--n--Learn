<template>

    <Card>

        <h1>Confirm Member Selection</h1>

        <form @submit.prevent="handleConfirm">

            <TextInput
                v-model="account.accountNumber"
                label="Account Number"
                id="accountNumber"
                disabled
            />

            <TextInput
                v-model="fullName"
                label="Name"
                id="name"
                disabled
            />

            <TextInput
                v-model="memberAddress"
                label="Address"
                id="address"
                disabled
            />

            <TextInput
                v-model="account.member.phone"
                label="Phone"
                id="phone"
                disabled
            />

            <TextInput
                v-model="account.member.dateOfBirth"
                label="Date of Birth"
                id="dob"
                disabled
            />

            <div class="field-group">
                <button class="cancel" type="button" title="Cancel Member Submission" @click="handleCancel">Cancel</button>
                <button class="submit" type="submit" title="Submit Member" @click="handleConfirm">Confirm</button>
            </div>

        </form>

    </Card>

</template>




<script>

    import { mapGetters, mapState } from 'vuex';

    import { Card, TextBox, TextInput } from '@/components';

    export default {

        name: 'ConfirmMember',
        components: {

            Card,
            TextBox,
            TextInput

        },
        computed: {

            ...mapState({

                account: state => state.userAccounts[0]
                
            }),
            ...mapGetters([

                'fullName'

            ]),
            memberAddress() {

                const address = this.account.address;

                return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

            }

        },
        methods: {

            handleConfirm() {

                this.$router.push('/accounts');

            },
            handleCancel() {

                this.$router.go(-1);

            }

        }

    }

</script>




<style lang="scss" scoped>

    @import '~@/assets/css/form';

</style>