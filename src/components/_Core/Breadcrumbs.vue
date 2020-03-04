<template>
    <ol class="inline-flex mt-6 text-gray-600">
        <li class="breadcrumb-item">
            <RouterLink to="/">
                {{ app.title }}
            </RouterLink>
        </li>

        <li class="px-2">
            <db-icon
                type="chevron-right"
                size="16"/>
        </li>

        <li class="breadcrumb-item active">
            {{ pageName }}
        </li>
    </ol>
</template>

<script lang="ts">
    import { mapState } from "vuex";
    import Vue from "vue";

    export default Vue.extend({
        name: "Breadcrumbs",

        props: {
            pageName: {
                type: String,
                required: true,
            }
        },

        computed: {
            ...mapState("config", [
                "app",
            ]),
        }
    });
</script>
