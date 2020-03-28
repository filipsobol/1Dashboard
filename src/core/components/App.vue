<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <DbHeader />

        <transition
            :duration="80"
            name="fade"
            mode="out-in">
            <RouterView :key="$route.fullPath" />
        </transition>

        <DbFooter />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";
    import DbHeader from "@/core/components/Header.vue";
    import DbFooter from "@/core/components/Footer.vue";

    export default defineComponent({
        name: "Application",

        components: {
            DbHeader,
            DbFooter
        },
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
