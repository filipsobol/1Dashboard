<template>
    <div class="wrapper">
        <i class="icon-alert-triangle" />

        <div class="text">
            <p class="title">{{ title }}</p>
            <p class="message">{{ message }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Error",

        props: {
            title: {
                type: String,
                required: false,
                default: "Sorry, this component could not be loaded"
            },
            message: {
                type: String,
                required: false,
                default: "Try refreshing the page. If this doesn't help, please report this issue to the system administrator.",
            },
        },

        created(): void {
            console.log(this.$props);
        }
    });
</script>

<style lang="scss" scoped>
    .wrapper {
        @apply flex;
        @apply px-4;
        @apply py-3;
        @apply text-red-800;
        @apply bg-red-200;
        @apply border-t-4;
        @apply border-red-600;
        @apply rounded;

        .icon-alert-triangle {
            @apply ml-2;
            @apply mr-6;
            @apply text-4xl;
            @apply text-red-600;
        }

        .title {
            @apply font-bold;
        }

        .message {
            @apply mt-1;
            @apply text-sm;
        }
    }
</style>
