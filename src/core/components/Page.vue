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
    import axios, { AxiosRequestConfig, Method } from "axios";
    import { defineComponent, computed } from "@vue/composition-api";
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
                    if (typeof vm.layout !== "function") {
                        vm.resolvedLayout = vm.layout;
                        return;
                    }

                    const request = axios.create(vm.$store.state.resources);

                    const makeRequest = async (method: Method, url: string, config?: AxiosRequestConfig) => {
                        const { data } = await request({
                            url,
                            method,
                            ...config
                        });

                        return data;
                    };

                    vm.resolvedLayout = await vm.layout({
                        route: vm.$router.history.current,
                        router: vm.$router,
                        get: (url: string, config?: AxiosRequestConfig) => makeRequest("get", url, config),
                        post: (url: string, config?: AxiosRequestConfig) => makeRequest("post", url, config),
                        put: (url: string, config?: AxiosRequestConfig) => makeRequest("put", url, config),
                        patch: (url: string, config?: AxiosRequestConfig) => makeRequest("patch", url, config),
                        delete: (url: string, config?: AxiosRequestConfig) => makeRequest("delete", url, config),
                    });
                } catch {
                    const internalErrorPage = vm.$store.state.statusPages.find(({ url }: Page) => url === PageUrl.InternalError);

                    if (internalErrorPage) {
                        // TODO: This page might also have dynamic layout
                        vm.resolvedLayout = internalErrorPage.layout;
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
