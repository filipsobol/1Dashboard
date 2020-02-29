<template>
    <div class="container">
        <ol class="breadcrumb mt-5 mb-1">
            <li class="breadcrumb-item">
                <a :href="app.url">{{ app.name }}</a>
            </li>

            <li class="breadcrumb-item active">
                {{ currentPage.title }}
            </li>
        </ol>

        <h1 class="mb-5">
            {{ currentPage.title }}
        </h1>

        <component
            v-if="currentPage"
            :is="'db-' + currentPage.component.type"
            v-bind="{ ...currentPage.component.props }"/>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Db-Page",

    data: () => ({
        page: null,
    }),

    computed: {
        ...mapState("config", [
            "app",
            "template",
        ]),

        currentPage() {
            return this.template.pages.find(({ url }) => url === this.$route.params.pathMatch);
        },
    },
};
</script>
