<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <db-header />

        <div class="container flex flex-col flex-grow mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <db-breadcrumbs
                    v-if="showBreadcrumbs"
                    :pageName="currentPage.name"
                    :key="'breadcrumbs-' + $route.fullPath"/>

                <h1
                    v-if="currentPage.title"
                    :key="'title-' + $route.fullPath"
                    class="text-2xl mt-1 text-gray-800">
                    {{ $t(currentPage.title) }}
                </h1>

            <transition
                :duration="200"
                name="fade"
                mode="out-in">
                <div
                    v-if="componentIsReady"
                    class="my-8"
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
    import { defineComponent, computed } from "@vue/composition-api";

    export default defineComponent({
        name: "DashboardLayout",

        props: {
            currentPage: {
                type: Object,
                required: true,
            },

            componentIsReady: {
                type: Boolean,
                required: true,
            }
        },

        setup(_) {
            const showBreadcrumbs = computed<boolean>(() => Boolean(_.currentPage) && (_.currentPage?.hideBreadcrumbs ?? true));

            return {
                // Computed
                showBreadcrumbs,
            };
        }
    });
</script>
