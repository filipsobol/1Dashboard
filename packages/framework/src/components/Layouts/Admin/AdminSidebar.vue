<template>
    <div
        :class="{ open: _.open }"
        class="sidebar">
        <!-- Mobile close button -->
        <div class="mobile-close">
            <button @click="$emit('toggleMenu')">
                <i class="icon-x" />
            </button>
        </div>

        <!-- Logo -->
        <div class="logo-wrapper">
            <img
                class="logo-image"
                src="https://via.placeholder.com/280x50" />
        </div>

        <!-- Menu items -->
        <div class="menu">
            <router-link
                v-for="page in menuPages"
                :key="page.url"
                :to="page.url"
                exact-active-class="active"
                tag="a">
                <i
                    v-if="page.icon"
                    :class="'icon-' + page.icon"/>

                <div>
                <span class="name">
                    {{ $t(page.name) }}
                </span>

                    <span class="description">
                    {{ $t(page.description) }}
                </span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, inject } from "@vue/composition-api";
    import { Page, PageUrl } from "@framework/interfaces/core/Config";

    export default defineComponent({
        name: "AdminSidebar",

        props: {
            open: {
                type: Boolean,
                required: true,
            }
        },

        setup(_) {
            // State
            const context = inject<any>(Symbol.for("context"));

            // Computed
            const pages = computed<any>(() => context.configuration.pages);
            const menuPages = computed<Page>(() =>
                pages.value.filter(({ url }: Page) => !Object.values(PageUrl).includes(url as PageUrl))
            );

            return {
                // State
                _,
                menuPages,
            };
        },
    });
</script>

<style lang="scss" scoped>
    $primaryTextColor: theme('colors.gray.200');
    $secondaryTextColor: theme('colors.gray.500');

    .sidebar {
        @apply flex;
        @apply flex-col;
        @apply flex-shrink-0;
        @apply bg-gray-900;
        @apply border-r;
        @apply border-gray-300;

        width: 300px;
    }

    .mobile-close {
        @apply hidden;
    }

    .logo-wrapper {
        @apply h-20;
        @apply p-3;
    }

    .logo-image {
        @apply w-full;
        @apply h-full;
        @apply bg-contain;
        @apply bg-center;
        @apply bg-no-repeat;
    }

    .menu {
        @apply mt-4;

        a {
            @apply flex;
            @apply flex-row;
            @apply h-16;
            @apply mx-4;
            @apply my-3;
            @apply px-4;
            @apply items-center;
            @apply rounded-md;
            @apply text-sm;
            @apply text-gray-400;

            &.active,
            &:hover {
                @apply bg-gray-800;
            }

            i {
                @apply mr-3;
                @apply text-gray-600;
            }

            div {
                @apply flex;
                @apply flex-col;
                @apply overflow-hidden;
            }

            .name {
                @apply font-medium;

                color: $primaryTextColor;
            }

            .description {
                @apply text-sm;
                @apply font-medium;
                @apply truncate;

                color: $secondaryTextColor;
            }
        }
    }

    @media (max-width: theme("screens.md.max")) {
        .sidebar {
            @apply absolute;
            @apply top-0;
            @apply left-0;
            @apply min-h-screen;
            @apply z-40;
            @apply transition;
            @apply transition-all;
            @apply ease-in-out;
            @apply duration-200;

            transform: translate3d(-100%, 0, 0);

            &.open {
                transform: translateZ(0);
            }
        }

        .logo-wrapper {
            @apply hidden;
        }

        .mobile-close {
            @apply flex;
            @apply justify-end;

            color: $primaryTextColor;

            button {
                @apply flex;
                @apply px-6;
                @apply py-6;
                @apply content-center;
                @apply justify-center;
            }

            i {
                @apply flex;
                @apply justify-center;
            }

            i:before {
                @apply text-3xl;
            }
        }

        .menu {
            @apply mt-0;

            a {
                @apply my-0;
            }
        }
    }
</style>
