<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
       <template v-if="pageIsReady">
           <DbHeader />

           <div class="container flex flex-col flex-grow mx-auto py-6 px-4 sm:px-6 lg:px-8">
               <transition-group
                   :duration="80"
                   name="fade"
                   mode="out-in">
                   <DbBreadcrumbs
                       v-if="showBreadcrumbs"
                       :pageName="currentPage.name"
                       :key="'breadcrumbs-' + currentPage.name" />

                   <h1
                       v-if="currentPage.title"
                       class="text-2xl mt-1 text-gray-800"
                       :key="'title-' + currentPage.title">
                       {{ $t(currentPage.title) }}
                   </h1>

                   <RouterView
                       v-if="pageIsReady && layoutIsReady"
                       :key="'router-view-' + $route.fullPath" />
               </transition-group>

               <div
                   v-if="!layoutIsReady"
                   :key="'loading-' + $route.fullPath"
                   class="flex flex-grow justify-center items-center">
                   <DbLoading size="large" />
               </div>
           </div>

           <DbFooter />
       </template>

        <div
            v-else
            class="flex flex-grow justify-center items-center">
            <DbLoading size="large" />
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, provide, watchEffect } from "@vue/composition-api";
    import DbHeader from "@framework/core/components/Header.vue";
    import DbFooter from "@framework/core/components/Footer.vue";
    import DbLoading from "@framework/core/components/Loading.vue";
    import DbBreadcrumbs from "@framework/core/components/Breadcrumbs.vue";
    import { Context, Page } from '@framework/interfaces/core/Config';

    export default defineComponent({
        name: "Application",

        components: {
            DbHeader,
            DbFooter,
            DbLoading,
            DbBreadcrumbs,
        },

        props: {
            context: {
                type: Object,
                required: true,
            },
        },

        setup(_: { context: Context }) {
            // State
            provide(Symbol.for("context"), _.context);

            // Computed
            const currentPage = computed<Page | undefined>(() => _.context.currentPage);
            const pageIsReady = computed<boolean>(() => Boolean(currentPage.value));
            const layoutIsReady = computed<boolean>(() => typeof currentPage.value?.layout !== "function");
            const showBreadcrumbs = computed<boolean>(() => currentPage.value?.props?.hideBreadcrumbs ?? true);

            // Watchers
            watchEffect(() => {
                const app = _.context.configuration.app;
                document.title = app.title;

                document
                    .querySelector("meta[name='description']")
                    ?.setAttribute("content", app.description);

                document
                    .querySelector("meta[name='keywords']")
                    ?.setAttribute("content", app.keywords);

                document
                    .querySelector("link[rel='icon']")
                    ?.setAttribute("href", app.faviconUrl);

                document
                    .querySelector("link[rel='icon']")
                    ?.setAttribute("type", app.faviconType);
            });

            return {
                // state
                _,
                currentPage,

                // Computed
                pageIsReady,
                layoutIsReady,
                showBreadcrumbs,
            }
        }
    });
</script>

<style lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
