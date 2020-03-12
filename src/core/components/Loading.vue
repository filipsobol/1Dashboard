<template>
    <div class="loader">
        <i class="icon-loader" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Loading",
    });
</script>

<style lang="scss" scoped>
    .loader {
        @apply flex;
        @apply content-center;
        @apply justify-center;
        @apply text-4xl;

        @keyframes spin {
            0% {
                @apply text-gray-400;
                transform: rotate(0deg);
            }
            50% {
                @apply text-gray-600;
                transform: rotate(180deg);
            }
            100% {
                @apply text-gray-400;
                transform: rotate(360deg);
            }
        }

        i.icon-loader::before {
            animation: spin 4000ms infinite linear;
        }
    }
</style>
