<template>
    <div class="my-8 flex-grow">
        <component
            v-bind="{ ...getComponentData(currentPage.layout) }"
            :is="getComponentName(currentPage.layout.type)" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, inject } from "@vue/composition-api";
    import DbLoading from "@framework/core/components/Loading.vue";
    import DbBreadcrumbs from "@framework/core/components/Breadcrumbs.vue";
    import { getComponentName, getComponentData } from "@framework/utils/nestedComponents";

    export default defineComponent({
        name: "Page",

        components: {
            DbBreadcrumbs,
            DbLoading,
        },

        setup(_: any) {
            const currentPage = inject<any>(Symbol.for("context")).currentPage;

            return {
                // State
                currentPage,

                // Methods
                getComponentName,
                getComponentData,
            };
        }
    });
</script>
