<template>
    <div>
        <db-header />

        <div class="container mx-auto">
            <ol class="breadcrumb mt-5 mb-1">
                <li class="breadcrumb-item">
                    <a :href="app.url">{{ app.title }}</a>
                </li>

                <li class="breadcrumb-item active">
                    {{ currentPage.name }}
                </li>
            </ol>

            <h1 class="text-3xl">
                {{ currentPage.title }}
            </h1>

            <router-view
                :key="$route.fullPath"
                v-bind="{ ...currentPage.component.props }"/>
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
        },
    };
</script>
