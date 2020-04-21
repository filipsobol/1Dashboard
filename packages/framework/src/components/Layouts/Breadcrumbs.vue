<template>
    <ol>
        <li>
            <RouterLink to="/">
                {{ app.title }}
            </RouterLink>
        </li>

        <li v-if="$route.path !== '/'">
            {{ $t(pageName) }}
        </li>
    </ol>
</template>

<script lang="ts">
    import { defineComponent, inject } from "@vue/composition-api";

    export default defineComponent({
        name: "Breadcrumbs",

        props: {
            pageName: {
                type: String,
                required: true,
            }
        },

        setup(_) {
            const app = inject<any>(Symbol.for("context")).configuration.app;

            return {
                // State
                _,
                app,
            };
        },
    });
</script>

<style lang="scss" scoped>
    ol {
        @apply flex;
        @apply inline-flex;
        @apply content-center;
        @apply text-gray-600;
        @apply text-sm;
        @apply font-medium;
    }

    li {
        @apply uppercase;

        & + &::before {
            @apply ml-4;
            @apply mr-3;
            @apply text-gray-500;
            @apply font-bold;

            content: "/";
        }
    }
</style>
