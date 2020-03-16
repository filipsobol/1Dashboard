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
        @apply text-gray-500;

        i.icon-loader::before {
            @apply text-4xl;
            animation: spin 4000ms infinite linear;
        }
    }
</style>
