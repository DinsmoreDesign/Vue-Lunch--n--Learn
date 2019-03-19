<template>

    <Card>

        <h1>eStatement Member Information</h1>

        <form>

            <TextInput
                :value="account.accountNumber"
                label="Account Number"
                id="accountNumber"
                disabled
            />

            <TextInput
                :value="fullName"
                label="Member Name"
                id="memberName"
                disabled
            />
            <TextInput
                :value="account.estatements.enrolled ? 'Yes' : 'No'"
                label="Enrolled"
                id="enrolled"
                disabled
            />

            <TextInput
                :value="account.estatements.disclosureAccepted ? 'Yes' : 'No'"
                label="Disclosure Accepted"
                id="disclosureAccepted"
                disabled
            />

            <TextInput
                :value="account.estatements.dates.enrollment"
                label="Enrollment Date"
                id="enrollmentDate"
                disabled
            />

            <TextInput
                :value="account.estatements.dates.updated"
                label="Update Date"
                id="updateDate"
                disabled
            />

            <TextInput
                :value="account.estatements.dates.canceled"
                label="Cancellation Date"
                id="cancellationDate"
                disabled
            />

            <TextInput
                :value="account.estatements.dates.leadSavings"
                label="Lead Saving Date"
                id="leadSavingsDate"
                disabled
            />

            <TextInput
                :value="account.estatements.dates.nextStatement"
                label="Next Statement"
                id="nextStatement"
                disabled
            />

            <TextInput
                v-model="account.member.email"
                label="Email Address"
                id="emailAddress"
            />

            <TextBox
                v-model="account.estatements.unenrollReason"
                label="Unenrolling Reason"
                id="unenrollReason"
            />

            <div class="field-group">
                <button type="button" title="Submit Changes" @click="handleSubmit">Submit Changes</button>
                <button class="cancel" type="button" title="Unenroll Member from eStatements" @click="handleEnrollment">{{ account.estatements.enrolled ? 'Unenroll Member' : 'Enroll Member' }}</button>
            </div>

        </form>

    </Card>

</template>




<script>

    import axios from '@/plugins/axios';

    import { mapActions, mapGetters, mapState } from 'vuex';

    import { Card, TextBox, TextInput } from '@/components';

    export default {

        name: 'MemberDetails',
        components: {

            Card,
            TextBox,
            TextInput

        },
        computed: {

            ...mapState({

                account: state => state.selectedAccount

            }),
            ...mapGetters([

                'fullName'

            ])

        },
        methods: {

            ...mapActions([

                'setUserError'

            ]),
            handleSubmit() {
                
                this.submitChanges({

                    email: this.account.member.email,
                    unenrollReason: this.account.estatements.unenrollReason

                })

            },
            handleEnrollment() {

                this.submitChanges({

                    enrolled: !this.account.estatements.enrolled

                });

            },
            submitChanges(details) {

                return axios.post('/member/update', details)
					.then(response => { this.$router.push('/success') })
					.catch(error => {

                        this.setUserError({
                            hasError: true,
                            message: error
                        });

					});

            }

        }

    }

</script>




<style lang="scss" scoped>

    @import '~@/assets/css/form';

</style>