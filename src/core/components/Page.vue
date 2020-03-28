<template>
    <div class="container flex-grow flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
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

        <div
            v-if="resolvedLayout"
            class="mb-8 flex-grow">
            <component
                v-bind="{ ...getComponentData(resolvedLayout) }"
                :is="getComponentName(resolvedLayout.type)" />
        </div>

        <div
            v-else
            class="flex flex-grow justify-center items-center">
            <DbLoading />
        </div>
    </div>
</template>

<script lang="ts">
    import { Route } from "vue-router";
    import { defineComponent, computed } from "@vue/composition-api";
    import { resolvePageContext } from "@/core/PageContext";
    import DbLoading from "@/core/components/Loading.vue";
    import DbBreadcrumbs from "@/core/components/Breadcrumbs.vue";
    import { Page, PageUrl } from "@/interfaces/core/Config";
    import { getComponentName, getComponentData } from "@/utils/nestedComponents";

    export default defineComponent({
        name: "Page",

        components: {
            DbBreadcrumbs,
            DbLoading,
        },

        props: {
            url: {
                type: [String, Number],
                required: true,
            },

            name: {
                type: String,
                required: true,
            },

            title: {
                type: String,
            },

            layout: {
                type: [
                    Object,
                    Function,
                    Promise,
                ],
                required: true,
            },

            props: {
                type: Object,
            },
        },

        data: () => ({
            resolvedLayout: null
        }),

        beforeRouteEnter (to: Route, from: Route, next: Function): void {
            next(async (vm: any) => {
                try {
                    // Resolve layout for current page
                    vm.resolvedLayout = await resolvePageContext(vm, vm.layout);
                } catch {
                    // Resolve to 500 error page if resolving layout for current page fails (eg. endpoint is down)
                    const InternalErrorPage = vm.$store.state.statusPages
                        .find(({ url }: Page) => url === PageUrl.InternalError);

                    if (InternalErrorPage) {
                        vm.resolvedLayout = await resolvePageContext(vm, InternalErrorPage.layout);
                    }
                }
            });
        },

        setup(_) {
            const showBreadcrumbs = computed(() => _.props?.hideBreadcrumbs ?? true);

            return {
                // State
                _,

                // Computed
                showBreadcrumbs,

                // Methods
                getComponentName,
                getComponentData,
            };
        },
    });
</script>
