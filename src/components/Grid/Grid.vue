<template>
    <div class="grid grid-cols-12 gap-6 row-gap-6">
        <db-grid-tile
            v-for="(component, index) in props.components"
            :key="index"
            :component="component" />
    </div>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { GridProps } from '@/interfaces/components/Grid';

    export default Vue.extend({
        name: "Grid",

        props: {
            props: {
                type: Object as PropType<GridProps>,
                required: true,
            }
        },
    });
</script>
