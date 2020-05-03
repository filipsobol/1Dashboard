<template>
    <div class="header">
        <div class="mobile-logo">
            <img
                :src="darkLogo"
                class="logo-image" />
        </div>

        <div class="mobile-menu">
            <button @click="$emit('toggleMenu')">
                <i class="icon-menu" />
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, inject } from "@vue/composition-api";

    export default defineComponent({
        name: "AdminHeader",

        setup(_) {
            // State
            const context = inject<any>(Symbol.for("context"));

            // Computed
            const darkLogo = computed<any>(() => {
                return context.configuration.app.darkLogoUrl;
            });


            return {
                // Computed
                darkLogo,
            };
        },
    });
</script>

<style lang="scss" scoped>
    .header {
        @apply hidden;
    }

    .mobile-menu button,
    .mobile-logo img {
        @apply hidden;
    }

    @media (max-width: theme("screens.md.max")) {
        .header {
            @apply flex-shrink-0;
            @apply flex;
            @apply w-full;
            @apply h-20;
            @apply p-4;
            @apply justify-between;
            @apply items-center;
            @apply border-b;
            @apply bg-white;
        }

        .mobile-logo {
            @apply flex;
            @apply h-full;

            width: 200px;

            img {
                @apply block;
                @apply max-w-full;
                @apply max-h-full;
                @apply bg-contain;
                @apply bg-center;
                @apply bg-no-repeat;
            }
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
