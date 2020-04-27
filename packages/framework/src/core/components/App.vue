<template>
    <transition
        :duration="200"
        name="fade"
        mode="out-in">
        <component
            v-if="currentPage"
            :is="layoutComponent"
            :current-page="currentPage"
            :show-breadcrumbs="showBreadcrumbs"
            :component-is-ready="componentIsReady">
            <component
                v-if="componentIsReady"
                v-bind="{ ...getComponentData(currentPage.content) }"
                :is="getComponentName(currentPage.content.type)" />
        </component>
    </transition>
</template>

<script lang="ts">
    import { computed, defineComponent, provide, watchEffect } from "@vue/composition-api";
    import { getComponentData, getComponentName } from "@framework/utils/nestedComponents";
    import { Context, Page } from '@framework/interfaces/core/Config';

    export default defineComponent({
        name: "Application",

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
            const currentPage = computed<Page | undefined>(() => {
                return _.context?.currentPage;
            });

            const layoutComponent = computed<string | null>(() => {
                return getComponentName(_.context?.currentPage?.layout || _.context?.configuration.app.defaultLayout);
            });

            const showBreadcrumbs = computed<boolean>(() => {
                return Boolean(currentPage) && (currentPage.value?.props?.hideBreadcrumbs ?? true);
            });

            const componentIsReady = computed<boolean>(() => {
                return Boolean(currentPage) && typeof currentPage.value?.content !== "function";
            });

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
                // State
                _,

                // Computed
                currentPage,
                layoutComponent,
                showBreadcrumbs,
                componentIsReady,

                // Methods
                getComponentName,
                getComponentData,
            };
        }
    });
</script>
