<template>

    <transition name="fade">

        <div class="error">

            <p>
                <ErrorIcon /> {{ message }}
            </p>

        </div>

    </transition>
    

</template>




<script>

    import { ErrorIcon } from '@/components';

    export default {

        components: {

            ErrorIcon

        },
        props: {

            message: {
                type: String,
                required: true
            }

        },
        created() {

            setTimeout(() => {

                this.$emit('close');

            }, 5000)

        }

    }

</script>




<style lang="scss" scoped>

    .error {
        padding: 1rem;
        width: 100%;
        position: fixed;
        text-align: center;
        background-color: #CD9F85;

        p {
            color: #FFF;
            font-size: 1.2rem;
        }

        svg {
            height: 1.2rem;
            margin-right: 0.5rem;
        }

    }

</style>