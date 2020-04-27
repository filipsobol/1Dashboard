<template>
    <div class="lex flex-col min-h-screen bg-gray-100">
        <db-header />

        <div class="bg-white border-b">
            <div class="container mx-auto p-4 sm:px-0">
                <db-breadcrumbs
                    v-if="showBreadcrumbs"
                    :pageName="currentPage.name"
                    :key="'breadcrumbs-' + $route.fullPath" />

                <h1
                    v-if="currentPage.title"
                    :key="'title-' + $route.fullPath"
                    class="mt-2 text-2xl text-gray-700">
                    {{ $t(currentPage.title) }}
                </h1>
            </div>
        </div>

        <div class="container flex flex-col flex-grow mx-auto py-6 px-4 sm:px-0">
            <transition
                :duration="200"
                name="fade"
                mode="out-in">
                <div
                    v-if="componentIsReady"
                    :key="'component-' + $route.fullPath">
                    <slot/>
                </div>

                <div
                    v-else
                    class="flex flex-grow justify-center items-center">
                    <db-loading size="large" />
                </div>
            </transition>
        </div>

        <db-footer />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";

    export default defineComponent({
        name: "DashboardLayout",

        props: {
            currentPage: {
                type: Object,
                required: true,
            },

            showBreadcrumbs: {
                type: Boolean,
                required: true,
            },

            componentIsReady: {
                type: Boolean,
                required: true,
            }
        },
    });
</script>
