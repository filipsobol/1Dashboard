<template>
    <div class="container flex-grow flex flex-col mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <DbBreadcrumbs
            v-if="showBreadcrumbs"
            :pageName="currentPage.name"/>

        <h1
            v-if="currentPage.title"
            class="text-2xl mt-1 text-gray-800">
            {{ $t(currentPage.title) }}
        </h1>

        <div
            v-if="layoutIsReady"
            class="my-8 flex-grow">
            <component
                v-bind="{ ...getComponentData(currentPage.layout) }"
                :is="getComponentName(currentPage.layout.type)" />
        </div>

        <div
            v-else
            class="flex flex-grow justify-center items-center">
            <DbLoading size="large" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, inject } from "@vue/composition-api";
    import { getComponentName, getComponentData } from "@framework/utils/nestedComponents";
    import DbLoading from "@framework/core/components/Loading.vue";
    import DbBreadcrumbs from "@framework/core/components/Breadcrumbs.vue";

    export default defineComponent({
        name: "Page",

        components: {
            DbBreadcrumbs,
            DbLoading,
        },

        setup(_: any) {
            const currentPage = inject<any>(Symbol.for("context")).currentPage;
            const layoutIsReady = computed<boolean>(() => typeof currentPage?.layout !== "function");
            const showBreadcrumbs = computed<boolean>(() => currentPage?.hideBreadcrumbs ?? true);

            return {
                // State
                currentPage,

                // Computed
                layoutIsReady,
                showBreadcrumbs,

                // Methods
                getComponentName,
                getComponentData,
            };
        }
    });
</script>

