<template>
    <div class="bg-gray-100 min-h-screen">
        <db-header />

        <div class="container mx-auto">
            <ol class="inline-flex mt-6 text-gray-600">
                <li class="breadcrumb-item">
                    <a :href="app.url">{{ app.title }}</a>
                </li>

                <li class="px-2">
                    <db-icon
                        type="chevron-right"
                        size="16"/>
                </li>

                <li class="breadcrumb-item active">
                    {{ currentPage.name }}
                </li>
            </ol>

            <h1 class="text-4xl mt-2 mb-6 text-gray-700">
                {{ currentPage.title }}
            </h1>

            <router-view
                :key="$route.fullPath"
                v-bind="{ ...componentProperties }" />
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import DbHeader from "./Header.vue";

    export default {
        name: "Application",

        components: {
            DbHeader,
        },

        computed: {
            ...mapState("config", [
                "app",
                "pages",
            ]),

            currentPage() {
                return this.pages.find(({ url }) => url === this.$route.path);
            },

            componentProperties() {
                return {
                    ...this.currentPage.component.props,
                    components: this.currentPage.component.components,
                };
            },
        },
    };
</script>
