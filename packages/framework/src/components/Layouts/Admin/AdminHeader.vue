<template>
    <div class="header">
        <div class="mobile-logo">

        </div>

        <div class="mobile-menu">
            <button @click="$emit('toggleMenu')">
                <i class="icon-menu" />
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";

    export default defineComponent({
        name: "AdminHeader",
    });
</script>

<style lang="scss" scoped>
    .header {
        @apply flex-shrink-0;
        @apply flex;
        @apply w-full;
        @apply h-20;
        @apply px-8;
        @apply justify-between;
        @apply items-center;
        @apply border-b;
        @apply bg-white;
    }

    .mobile-menu button,
    .mobile-logo img {
        @apply hidden;
    }

    @media (max-width: theme("screens.md.max")) {
        .header {
            @apply px-4;
        }

        .mobile-menu {
            @apply flex;
            @apply flex-row;

            button {
                @apply flex;
                @apply w-12;
                @apply h-12;
                @apply items-center;
                @apply justify-center;
                @apply rounded-full;
                @apply cursor-pointer;

                &:hover {
                    @apply bg-gray-300;
                }
            }
        }
    }
</style>
