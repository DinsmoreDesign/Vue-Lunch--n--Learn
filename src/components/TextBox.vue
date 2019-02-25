<template>

    <div class="field-group">
        <label :for="id">{{ label }}:</label>
        <textarea :name="id" :id="id" :aria-valuemin="value" :disabled="disabled" @input="$emit('input', $event.target.value)" />
    </div>

</template>





<script>

    export default {

        props: {

            value: {
                type: [String, Number],
                required: true
            },
            id: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            disabled: {
                type: Boolean,
                required: false,
                default: false
            }

        }

    }

</script>





<style lang="scss" scoped>

    .field-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        margin-bottom: 1rem;

        label {
            text-align: right;
            align-self: center;
        }

        textarea {
            padding: 0.5rem;
            border: 2px solid #7a7a7a;
            background: none;

            &[disabled] {
                background: #EFEFEF;
                cursor: not-allowed;
            }

        }
    
    }

</style>