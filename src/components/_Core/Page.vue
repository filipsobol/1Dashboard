<template>
    <div class="container mx-auto">
        <DbBreadcrumbs
            :pageName="name"/>

        <h1 class="text-4xl mt-2 mb-6 text-gray-700">
            {{ title }}
        </h1>

        <component
            :is="'db-' + component.type"
            v-bind="{ ...component.props }" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Page } from '@/interfaces/core/Config';

    export default Vue.extend({
        name: "Page",

        components: {
            DbBreadcrumbs: Vue.component("db-breadcrumbs")
        },

        props: {
            component: {
                type: Object,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        }
    });
</script>
