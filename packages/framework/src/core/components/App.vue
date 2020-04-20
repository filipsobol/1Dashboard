<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <DbHeader/>

        <div class="container flex flex-col flex-grow mx-auto">
            <transition
                v-if="pageIsReady"
                :duration="80"
                name="fade"
                mode="out-in"
                class="flex flex-col flex-grow">
                <RouterView :key="'router-view-' + $route.fullPath" />
            </transition>
        </div>

        <DbFooter/>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, provide, watchEffect } from "@vue/composition-api";
    import DbHeader from "@framework/core/components/Header.vue";
    import DbFooter from "@framework/core/components/Footer.vue";
    import { Context, Page } from '@framework/interfaces/core/Config';

    export default defineComponent({
        name: "Application",

        components: {
            DbHeader,
            DbFooter,
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
