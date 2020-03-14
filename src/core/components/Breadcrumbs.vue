<template>
    <ol class="flex inline-flex text-gray-600 content-center">
        <li class="breadcrumb-item">
            <RouterLink to="/">
                {{ app.title }}
            </RouterLink>
        </li>

        <li class="mx-3">
            <i class="icon-chevron-right" />
        </li>

        <li class="breadcrumb-item active">
            {{ pageName }}
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
    i::before {
        @apply text-lg;
    }
</style>
