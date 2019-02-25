<template>

    <Card>

        <h1>eStatement Member Information</h1>

        <form>

            <div class="field-group">
                <label for="accountNumber">Account Number:</label>
                <input type="text" name="accountNumber" id="accountNumber" :value="value.accountNumber" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="memberName">Member Name:</label>
                <input type="text" name="memberName" id="memberName" :value="value.name" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="enrolled">Enrolled:</label>
                <input type="text" name="enrolled" id="enrolled" :value="value.enrolled ? 'Yes' : 'No'" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="disclosureAccepted">Disclosure Accepted:</label>
                <input type="text" name="disclosureAccepted" id="disclosureAccepted" :value="value.disclosureAccepted ? 'Yes' : 'No'" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="enrollmentDate">Enrollment Date:</label>
                <input type="text" name="enrollmentDate" id="enrollmentDate" :value="value.enrollmentDate" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="updateDate">Update Date:</label>
                <input type="text" name="updateDate" id="updateDate" :value="value.updateDate" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="cancellationDate">Cancellation Date:</label>
                <input type="text" name="cancellationDate" id="cancellationDate" :value="value.cancellationDate" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="leadSavingsDate">Lead Saving Date:</label>
                <input type="text" name="leadSavingsDate" id="leadSavingsDate" :value="value.leadSavingsDate" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="nextStatement">Next Statement:</label>
                <input type="text" name="nextStatement" id="nextStatement" :value="value.nextStatement" disabled="disabled" />
            </div>

            <div class="field-group">
                <label for="emailAddress">Email Address:</label>
                <input type="text" name="emailAddress" id="emailAddress" v-model="value.email" />
            </div>

            <div class="field-group">
                <label for="unenrollReason">Unenrolling Reason:</label>
                <textarea name="unenrollReason" id="unenrollReason" v-model="value.unenrollReason" />
            </div>

            <div class="field-group">
                <button type="button" title="Submit Changes" @click="handleSubmit">Submit Changes</button>
                <button class="cancel" type="button" title="Unenroll Member from eStatements" @click="handleEnrollment">{{ value.enrolled ? 'Unenroll Member' : 'Enroll Member' }}</button>
            </div>

        </form>

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