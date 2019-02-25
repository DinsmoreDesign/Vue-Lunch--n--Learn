<template>

    <Card>

        <h1>Confirm Member Selection</h1>

        <form @submit.prevent="handleSubmit">

            <TextInput
                v-model="value.accountNumber"
                label="Account Number"
                id="accountNumber"
                disabled
            />

            <TextInput
                v-model="value.name"
                label="Name"
                id="name"
                disabled
            />

            <TextInput
                v-model="value.address"
                label="Address"
                id="address"
                disabled
            />

            <TextInput
                v-model="value.phone"
                label="Phone"
                id="phone"
                disabled
            />

            <TextInput
                v-model="value.dob"
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

    import { Card, TextBox, TextInput } from '@/components';

    export default {

        components: {

            Card,
            TextBox,
            TextInput

        },
        props: {
            
            value: {
                type: Object,
                required: true
            }

        },
        methods: {

            handleConfirm() {

                this.$emit('confirm');

            },
            handleCancel() {

                this.$emit('cancel');

            }

        }

    }

</script>




<style lang="scss" scoped>

    @import '../../assets/css/form';

</style>