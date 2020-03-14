<template>
    <div class="container flex-grow mx-auto px-4 sm:px-6 lg:px-8">
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
                :is="getComponentName(component.type)"
                v-bind="{ ...getComponentData(component) }" />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import DbBreadcrumbs from "@/core/components/Breadcrumbs.vue";
    import { getComponentName, getComponentData } from "@/utils/nestedComponents";

    export default Vue.extend({
        name: "Page",

        components: {
            DbBreadcrumbs,
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
        },

        methods: {
            getComponentName,
            getComponentData,
        },
    });
</script>
