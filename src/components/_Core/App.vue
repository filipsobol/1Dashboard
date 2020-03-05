<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <DbHeader />

        <RouterView :key="$route.fullPath" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Application",

        components: {
            DbHeader: Vue.component("db-header"),
        },
    });
</script>
