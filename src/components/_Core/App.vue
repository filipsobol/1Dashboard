<template>
    <div class="bg-gray-100 min-h-screen">
        <DbHeader />

        <div class="container mx-auto">
            <DbBreadcrumbs />

            <h1 class="text-4xl mt-2 mb-6 text-gray-700">
                {{ currentPage.title }}
            </h1>

            <RouterView
                :key="$route.fullPath"
                v-bind="{ ...componentProperties }" />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { mapState } from "vuex";
    import { Page } from '@/interfaces/core/Config';

    export default Vue.extend({
        name: "Application",

        components: {
            DbHeader: Vue.component("db-header"),
            DbBreadcrumbs: Vue.component("db-breadcrumbs")
        },

        computed: {
            ...mapState("config", [
                "app",
                "pages",
            ]),

            currentPage(): Page {
                return this.pages.find(({ url }: any) => url === this.$route.path);
            },

            componentProperties(): object {
                return {
                    ...this.currentPage.component.props,
                    components: this.currentPage.component.components,
                };
            },
        },
    });
</script>
