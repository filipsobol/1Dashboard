<template>
    <div class="flex flex-row min-h-screen bg-gray-100">
        <!-- Sidebar -->
        <div
            class="flex flex-col flex-shrink-0 bg-gray-900 border-r border-gray-300"
            style="width: 300px">
            <!-- Logo -->
            <div class="h-20 p-3">
                <img
                    class="w-full h-full bg-contain bg-center bg-no-repeat"
                    src="https://via.placeholder.com/280x50"
                    alt=""/>
            </div>

            <!-- Menu items -->
            <div class="mt-4">
                <router-link
                    v-for="page in menuPages"
                    :key="page.url"
                    :to="page.url"
                    exact-active-class="active"
                    class="router-link"
                    tag="a">
                    <i
                        v-if="page.icon"
                        :class="'icon-' + page.icon"/>

                    <div>
                        <span class="name">
                            {{ $t(page.name) }}
                        </span>

                        <span class="description">
                            {{ $t(page.description) }}
                        </span>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="flex flex-col w-full">
            <!-- Header -->
            <div class="header">
                <div>
                    TO DO
                </div>

                <!-- User section -->
                <div class="header-user">
                    <div>
                        <i class="icon-search" />
                    </div>

                    <div>
                        <i class="icon-message-square" />
                    </div>

                    <div>
                        <i class="icon-bell" />
                    </div>

                    <div>
                        <i class="icon-settings" />
                    </div>

                    <router-link to="/auth/logout">
                        <i class="icon-log-out" />
                    </router-link>
                </div>
            </div>

            <!-- Content -->
            <div class="flex-grow m-8">
                <!-- Title -->
                <div>
                    <db-breadcrumbs
                        v-if="showBreadcrumbs"
                        :pageName="currentPage.name"
                        :key="'breadcrumbs-' + $route.fullPath" />

                    <h1
                        v-if="currentPage.title"
                        :key="'title-' + $route.fullPath"
                        class="mt-3 text-2xl text-gray-700">
                        {{ $t(currentPage.title) }}
                    </h1>
                </div>

                <div class="mt-8">
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
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, inject, ref, watch } from "@vue/composition-api";
    import { Page, PageUrl } from "@framework/interfaces/core/Config";

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

        setup(_) {
            // State
            const open = ref<boolean>(false);
            const context = inject<any>(Symbol.for("context"));

            // Computed
            const pages = computed<any>(() => context.configuration.pages);
            const currentRoute = computed<any>(() => context.route);
            const menuPages = computed<Page>(() =>
                pages.value.filter(({ url }: Page) => !Object.values(PageUrl).includes(url as PageUrl))
            );

            // Watchers
            watch(currentRoute, () => open.value = false);

            return {
                // State
                _,
                open,
                menuPages
            };
        },
    });
</script>

<style lang="scss" scoped>
    a.router-link {
        @apply flex;
        @apply flex-row;
        @apply h-16;
        @apply mx-4;
        @apply my-3;
        @apply px-4;
        @apply items-center;
        @apply rounded-md;
        @apply text-sm;
        @apply text-gray-400;

        &.active,
        &:hover {
            @apply bg-gray-800;
        }

        i {
            @apply mr-3;
            @apply text-gray-600;
        }

        div {
            @apply flex;
            @apply flex-col;
            @apply overflow-hidden;
        }

        .name {
            @apply font-medium;
            @apply text-gray-200;
        }

        .description {
            @apply text-sm;
            @apply font-medium;
            @apply text-gray-500;
            @apply truncate;
        }
    }

    .header {
        @apply flex;
        @apply w-full;
        @apply h-20;
        @apply px-8;
        @apply justify-between;
        @apply items-center;
        @apply border-b;
        @apply bg-white;

        &-user {
            @apply flex;
            @apply flex-row;

            & > * {
                @apply flex;
                @apply w-12;
                @apply h-12;
                @apply items-center;
                @apply justify-center;
                @apply rounded-full;

                &:hover {
                    @apply bg-gray-300;
                }
            }

            & > * + * {
                @apply ml-2;
            }
        }
    }
</style>
