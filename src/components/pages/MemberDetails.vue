<template>

    <Card>

        <h1>eStatement Member Information</h1>

        <form>

            <TextInput
                :value="value.accountNumber"
                label="Account Number"
                id="accountNumber"
                disabled
            />

            <TextInput
                :value="value.name"
                label="Member Name"
                id="memberName"
                disabled
            />
            <TextInput
                :value="value.enrolled ? 'Yes' : 'No'"
                label="Enrolled"
                id="enrolled"
                disabled
            />

            <TextInput
                :value="value.disclosureAccepted ? 'Yes' : 'No'"
                label="Disclosure Accepted"
                id="disclosureAccepted"
                disabled
            />

            <TextInput
                :value="value.enrollmentDate"
                label="Enrollment Date"
                id="enrollmentDate"
                disabled
            />

            <TextInput
                :value="value.updateDate"
                label="Update Date"
                id="updateDate"
                disabled
            />

            <TextInput
                :value="value.cancellationDate"
                label="Cancellation Date"
                id="cancellationDate"
                disabled
            />

            <TextInput
                :value="value.leadSavingsDate"
                label="Lead Saving Date"
                id="leadSavingsDate"
                disabled
            />

            <TextInput
                :value="value.nextStatement"
                label="Next Statement"
                id="nextStatement"
                disabled
            />

            <TextInput
                v-model="value.email"
                label="Email Address"
                id="emailAddress"
            />

            <TextBox
                v-model="value.unenrollReason"
                label="Unenrolling Reason"
                id="unenrollReason"
            />

            <div class="field-group">
                <button type="button" title="Submit Changes" @click="handleSubmit">Submit Changes</button>
                <button class="cancel" type="button" title="Unenroll Member from eStatements" @click="handleEnrollment">{{ value.enrolled ? 'Unenroll Member' : 'Enroll Member' }}</button>
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

            handleSubmit() {

                this.$emit('submit', {

                    email: this.value.email,
                    unenrollReason: this.value.unenrollReason

                });

            },
            handleEnrollment() {

                this.$emit('changeEnrollment', {
                    enrolled: !this.value.enrolled
                });

            }

        }

    }

</script>




<style lang="scss" scoped>

    @import '../../assets/css/form';

</style>