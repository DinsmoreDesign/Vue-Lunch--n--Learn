<template>

    <div>
        <p>
            Please enter a valid account number to enroll a member in eStatements or update the information for an existing eStatements user. Enter the email address to find only for members that are currently enrolled in eStatements. After you confirm that the member you are looking for is correct you can complete the enrollment or make the necessary updates to their eStatements information.
        </p>

        <div class="selection-container">

            <Card
                :class="{ 'account-card': true }"
                textCentered
                selectable
                :selected="showAccount"
                @clicked="openOptions('account')"
            >
                <EmailIcon :fill="showAccount ? '#73869a' : '#777'" />
                <h3>Account Number</h3>

                <transition name="fade">
                    <form class="account-options" @submit.prevent="handleSubmit" v-if="showAccount">
                        <input v-model="accountNumber" placeholder="1234567890">
                        <button type="submit">Search</button>
                    </form>
                </transition>

            </Card>

            <Card
                :class="{ 'account-card': true }"
                textCentered
                selectable
                :selected="showEmail"
                @clicked="openOptions('email')"
            >
                <UserIcon :fill="showEmail ? '#73869a' : '#777'" />
                <h3>Email</h3>

                <transition name="fade">
                    <form class="account-options" @submit.prevent="handleSubmit" v-if="showEmail">
                        <input v-model="emailAddress" placeholder="jane.doe@example.com">
                        <button type="submit">Search</button>
                    </form>
                </transition>

            </Card>

        </div>
        

    </div>

</template>




<script>

    import axios from '@/plugins/axios';

    import { Card, EmailIcon, UserIcon } from '@/components';

    export default {
        
        components: {

            Card,
            EmailIcon,
            UserIcon

        },
        data() {
            return {

                showAccount: false,
                showEmail: false,
                accountNumber: null,
                emailAddress: null
            }
        },
        methods: {

            openOptions(type) {

                if (type === 'account') {

                    this.showEmail = false;
                    this.showAccount = true;

                } else {

                    this.showAccount = false;
                    this.showEmail = true;

                }

            },
            handleSubmit() {

                if (this.showAccount && this.accountNumber) {

                    return axios.get('/member/accountNumber/' + this.accountNumber)
                        .then(response => this.emitResult(true, response))
                        .catch(error => this.emitResult(false, error));

                };

                if (this.showEmail && this.emailAddress) {

                    return axios.get('/member/email/' + this.emailAddress)
                        .then(response => this.emitResult(true, response))
                        .catch(error => this.emitResult(false, error));

                };

            },
            emitResult(success, data) {

                success
                    ? this.$emit('success', data)
                    : this.$emit('error', data);

            }

        }

    }

</script>




<style lang="scss" scoped>

    @import '../../assets/css/landing';

</style>