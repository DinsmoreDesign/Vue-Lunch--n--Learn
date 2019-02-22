<template>

    <Card>

        <h3>Confirm Member Selection</h3>

        <form @submit.prevent="handleSubmit">

            <div class="field-group">
                <label for="accountNumber">Account Number</label>
                <input type="text" name="accountNumber" id="accountNumber" :value="value.accountNumber" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" :value="value.name" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="address">Address</label>
                <input type="text" name="address" id="address" :value="value.address" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="phone">Phone</label>
                <input type="text" name="phone" id="phone" :value="value.phone" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="dob">Date of Birth</label>
                <input type="text" name="dob" id="dob" :value="value.dob" disabled="disabled" />
            </div>

            <button class="cancel" type="button" title="Cancel Member Submission" @click="handleCancel">Cancel</button>
            <button class="submit" type="submit" title="Submit Member" @click="handleConfirm">Confirm</button>

        </form>

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
                type: Object,
                required: true
            }

        },
        methods: {

            handleConfirm() {

                return axios.get('/member/accounts/')
                    .then(response => this.$emit('confirm', response));

            },
            handleCancel() {

                this.$emit('cancel');

            }

        }

    }

</script>




<style lang="scss" scoped>



</style>