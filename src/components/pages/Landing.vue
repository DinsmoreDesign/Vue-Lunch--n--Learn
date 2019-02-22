<template>

    <div>
        <p>
            Please enter a valid account number to enroll a member in eStatements or update the information for an existing eStatements user. Enter the email address to find only for members that are currently enrolled in eStatements. After you confirm that the member you are looking for is correct you can complete the enrollment or make the necessary updates to their eStatements information.
        </p>

        <div class="selection-container">

            <Card
                class="account-card"
                textCentered
                selectable
                :selected="showAccountForm"
                @clicked="openOptions('account')"
            >
                <div class="title">
                    <EmailIcon :fill="showAccountForm ? '#73869a' : '#777'" />
                    <h3>Account Number</h3>
                </div>

                <transition name="fade-grow">
                    <form class="account-options" @submit.prevent="handleSubmit" v-if="showAccountForm">
                        <input v-model="accountNumber" placeholder="1234567890">
                        <button type="submit">Search</button>
                    </form>
                </transition>

            </Card>

            <Card
                class="account-card"
                textCentered
                selectable
                :selected="showEmailForm"
                @clicked="openOptions('email')"
            >
                <div class="title">
                    <UserIcon :fill="showEmailForm ? '#73869a' : '#777'" />
                    <h3>Email</h3>
                </div>

                <transition name="fade-grow">
                    <form class="account-options" @submit.prevent="handleSubmit" v-if="showEmailForm">
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

                showAccountForm: false,
                showEmailForm: false,
                accountNumber: null,
                emailAddress: null
            }
        },
        methods: {

            openOptions(type) {

                if (type === 'account') {

                    this.showEmailForm = false;
                    this.emailAddress = null;
                    this.showAccountForm = true;

                }
                
                if (type === 'email') {

                    this.showAccountForm = false;
                    this.accountNumber = null;
                    this.showEmailForm = true;

                }

            },
            handleSubmit() {

                const searchTerm = this.accountNumber ? this.accountNumber : this.emailAddress;

                if (searchTerm) {

                    return axios.get('/member/search/' + searchTerm)
                        .then(response => this.$emit('success', response))
                        .catch(error => this.$emit('error', error));

                }

            }

        }

    }

</script>




<style lang="scss" scoped>

    @import '../../assets/css/landing';

</style>