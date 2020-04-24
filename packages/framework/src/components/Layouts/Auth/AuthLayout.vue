<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <div class="container flex flex-col flex-grow items-center justify-center mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="w-full lg:w-1/2">
                <div
                    v-if="componentIsReady"
                    class="my-8"
                    :key="'component-' + $route.fullPath">
                    <slot/>
                </div>
            </div>
        </div>
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
