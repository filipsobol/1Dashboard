<template>
    <div
        :class="{ 'sidebar-open': sidebarOpen }"
        class="page-wrapper">
        <!-- Sidebar -->
        <db-admin-sidebar
            :open="sidebarOpen"
            @toggleMenu="toggleMenu()" />

        <div class="flex flex-col w-full">
            <!-- Header -->
            <db-admin-header @toggleMenu="toggleMenu()" />

            <!-- Content -->
            <div class="page">
                <!-- Title -->
                <div class="heading">
                    <db-breadcrumbs
                        v-if="showBreadcrumbs"
                        :pageName="currentPage.name"
                        :key="'breadcrumbs-' + $route.fullPath" />

                    <h1
                        v-if="currentPage.title"
                        :key="'title-' + $route.fullPath"
                        class="text-3xl text-gray-800">
                        {{ $t(currentPage.title) }}
                    </h1>
                </div>

                <div class="content">
                    <transition
                        :duration="200"
                        name="fade"
                        mode="out-in">
                        <div
                            v-if="componentIsReady"
                            :key="'component-' + $route.fullPath"
                            class="flex-grow">
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

    export default defineComponent({
        name: "AdminLayout",

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
            const sidebarOpen = ref<boolean>(false);
            const context = inject<any>(Symbol.for("context"));

            // Computed
            const currentRoute = computed<any>(() => context.route);

            // Methods
            function toggleMenu() {
                sidebarOpen.value = !sidebarOpen.value;
            }

            // Watchers
            watch(currentRoute, () => sidebarOpen.value = false);

            return {
                // State
                sidebarOpen,

                // Computed
                currentRoute,

                // Methods
                toggleMenu,
            };
        }
    });
</script>

<style lang="scss" scoped>
    .page-wrapper {
        @apply flex;
        @apply flex-row;
        @apply min-h-screen;
        @apply bg-gray-100;

        &.sidebar-open {
            @apply h-screen;
            @apply overflow-y-hidden;
        }
    }

    .page {
        @apply flex-grow;
        @apply flex;
        @apply flex-col;
        @apply m-8;
    }

    .content {
        @apply flex-grow;
        @apply flex;
        @apply mt-8;
    }

    @media (max-width: theme("screens.md.max")) {
        .page {
            @apply m-4;
        }

        .content {
            @apply mt-4;
        }
    }
</style>
