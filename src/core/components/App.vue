<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <DbHeader />

        <transition
            :duration="80"
            name="fade"
            mode="out-in">
            <RouterView :key="$route.fullPath" />
        </transition>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import DbHeader from "@/core/components/Header.vue";

    export default Vue.extend({
        name: "Application",

        components: {
            DbHeader,
        },
    });
</script>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
