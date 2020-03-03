<template>
    <div class="grid grid-cols-12 gap-6 row-gap-6">
        <DbGridTile
            v-for="(component, index) in components"
            :key="index"
            :component="component" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Grid",

        components: {
            DbGridTile: Vue.component("db-gridtile")
        },

        props: {
            components: {
                type: Array,
                required: true,
            },
        },
    });
</script>
