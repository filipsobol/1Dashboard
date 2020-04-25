<template>
    <div
        class="loader"
        :class="`variable-loader-${size}`">
        <i class="icon-loader" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Loading",

        props: {
            size: {
                type: String,
                required: false,
                default: "medium",
            },
        },
    });
</script>

<style lang="scss" scoped>
    .variable-loader {
        @apply flex;
        @apply content-center;
        @apply justify-center;
        @apply text-gray-500;

        i.icon-loader::before {
            animation: spin 4000ms infinite linear;
        }

        &-small {
            i.icon-loader::before {
                @apply text-3xl;
            }
        }

        &-medium {
            i.icon-loader::before {
                @apply text-4xl;
            }
        }

        &-large {
            i.icon-loader::before {
                @apply text-6xl;
            }
        }
    }
</style>
