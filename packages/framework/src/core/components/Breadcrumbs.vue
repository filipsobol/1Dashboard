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
    import Vue from "vue";
    import { mapState } from "vuex";

    export default Vue.extend({
        name: "Breadcrumbs",

        props: {
            pageName: {
                type: String,
                required: true,
            }
        },

        computed: {
            ...mapState([
                "app",
            ]),
        }
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
