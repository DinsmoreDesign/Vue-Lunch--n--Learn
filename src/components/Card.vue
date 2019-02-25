<template>

    <div
        :class="{
            'card': true,
            'text-center': textCentered,
            'selectable': selectable,
            'selected': selected
        }"
        @click="handleClick"
    >
        
        <slot/>
        
    </div>

</template>




<script>

    export default {
        
        props: {
            
            textCentered: {
                type: Boolean,
                required: false,
                default: false
            },
            selectable: {
                type: Boolean,
                required: false,
                default: false
            },
            selected: {
                type: Boolean,
                required: false,
                default: false
            }

        },
        methods: {

            handleClick() {

                if (this.selectable) this.$emit('clicked');

            }

        }

    }

</script>




<style lang="scss" scoped>

    .card {
        padding: 1rem;
        border: 3px solid #DDD;

        &.text-center {
            text-align: center;
        }

        &.selectable {
            cursor: pointer;

            &:hover {
                opacity: 0.9;
            }

            &.selected:hover {
                opacity: 1;
            }

        }

        &.selected {
            border: 3px solid rgb(115,134,154);
            //background: rgba(115,134,154,.1)
        }

    }

</style>