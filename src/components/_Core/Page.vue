<template>
    <div class="container mx-auto flex-grow">
        <div class="mt-6 mb-8">
            <DbBreadcrumbs
                v-if="showBreadcrumbs"
                :pageName="name"/>

            <h1
                v-if="title"
                class="text-4xl mt-2 text-gray-700">
                {{ title }}
            </h1>
        </div>

        <div class="mb-8">
            <component
                :is="'db-' + component.type"
                v-bind="{ ...component.props }" />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Page",

        components: {
            DbBreadcrumbs: Vue.component("db-breadcrumbs")
        },

        props: {
            url: {
                type: String,
                required: true,
            },

            name: {
                type: String,
                required: true,
            },

            title: {
                type: String,
            },

            component: {
                type: Object,
                required: true,
            },

            props: {
                type: Object,
            },
        },

        computed: {
            showBreadcrumbs(): boolean {
                return !this.props?.hideBreadcrumbs ?? true;
            }
        }
    });
</script>
