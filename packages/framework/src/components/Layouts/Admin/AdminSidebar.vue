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
                :src="lightLogo"
                class="logo-image" />
        </div>

        <!-- Menu items -->
        <div class="menu thin-scrollbar">
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

        <div class="user">
            <div class="user-profile">
                <div class="user-image">
                    <img
                        class="inline-block h-12 w-12 rounded-full text-white shadow-solid"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt="" />
                </div>
                <div class="user-information">
                    <p class="user-name">
                        John Doe
                    </p>

                    <p class="user-description">
                        Software Developer
                    </p>
                </div>
            </div>

            <db-dropdown :props="dropdownProps" />
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, inject } from "@vue/composition-api";
    import { Page, PageUrl } from "@framework/interfaces/core/Config";
    import { DropdownXPosition, DropdownYPosition } from "@framework/interfaces/components/Dropdown";
    import { ButtonStyle } from "@framework/interfaces/components/Button";

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
            const dropdownProps = {
                button: {
                    icon: "settings",
                    style: ButtonStyle.Light,
                },
                items: [
                    {
                        icon: "message-circle",
                        text: "Messages",
                        url: "/"
                    },
                    {
                        icon: "bell",
                        text: "Notifications",
                        url: "/"
                    },
                    {
                        icon: "settings",
                        text: "Settings",
                        url: "/"
                    },
                    {
                        icon: "log-out",
                        text: "Sign out",
                        url: "/auth/logout"
                    },
                ],
                xPosition: DropdownXPosition.Top,
                yPosition: DropdownYPosition.Left,
            };

            // Computed
            const lightLogo = computed<any>(() => {
                return context.configuration.app.lightLogoUrl;
            });

            const pages = computed<any>(() => {
                return context.configuration.pages;
            });

            const menuPages = computed<Page>(() => {
                return pages.value.filter(({ url }: Page) => !Object.values(PageUrl).includes(url as PageUrl));
            });

            return {
                // State
                _,
                dropdownProps,

                // Computed
                lightLogo,
                pages,
                menuPages,
            };
        },
    });
</script>

<style lang="scss" scoped>
    $primaryTextColor: theme("colors.gray.200");
    $secondaryTextColor: theme("colors.gray.500");

    .sidebar {
        @apply h-screen;
        @apply sticky;
        @apply top-0;
        @apply flex;
        @apply flex-col;
        @apply flex-shrink-0;
        @apply bg-gray-900;
        @apply border-r;
        @apply border-gray-300;
        @apply z-30;

        width: 300px;
    }

    .mobile-close {
        @apply hidden;
    }

    .logo-wrapper {
        @apply flex;
        @apply h-20;
        @apply p-4;
        @apply items-center;
        @apply justify-center;
    }

    .logo-image {
        @apply max-w-full;
        @apply max-h-full;
        @apply bg-contain;
        @apply bg-center;
        @apply bg-no-repeat;
    }

    .menu {
        @apply flex-grow;
        @apply my-2;
        @apply mr-1; // Make some space between scrollbar and edge of sidebar
        @apply overflow-y-auto;

        a {
            @apply flex;
            @apply flex-row;
            @apply h-16;
            @apply mx-4;
            @apply my-1;
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

    .user {
        @apply flex;
        @apply flex-row;
        @apply px-2;
        @apply justify-between;
        @apply items-center;
        @apply border-t;
        @apply border-gray-800;

        &-profile {
            @apply flex-grow;
            @apply flex;
            @apply flex-row;
            @apply items-center;
            @apply py-4;
            @apply px-2;
        }

        &-image {
            @apply flex-shrink-0;
            @apply mr-4;
        }

        &-information {
            @apply flex-grow;
            @apply block;
            @apply overflow-hidden;
        }

        &-name {
            @apply truncate;
            @apply font-medium;

            color: $primaryTextColor;
        }

        &-description {
            @apply truncate;
            @apply font-medium;
            @apply text-sm;

            color: $secondaryTextColor;
        }

        &-settings {
            @apply relative;
            @apply flex;
            @apply justify-end;

            color: $secondaryTextColor;

            button {
                @apply flex;
                @apply px-6;
                @apply py-6;
                @apply content-center;
                @apply justify-center;

                &:hover {
                    color: $primaryTextColor;
                }
            }

            i {
                @apply flex;
                @apply justify-center;
            }

            i:before {
                @apply text-3xl;
            }
        }
    }

    @media (max-width: theme("screens.md.max")) {
        .sidebar {
            @apply fixed;
            @apply top-0;
            @apply right-0;
            @apply w-screen;
            @apply min-h-screen;
            @apply border-0;
            @apply z-40;
            @apply transition;
            @apply transition-all;
            @apply ease-in-out;
            @apply duration-200;

            transform: translate3d(100%, 0, 0);

            &.open {
                transform: translateZ(0);
            }
        }

        .logo-wrapper {
            @apply hidden;
        }

        .mobile-close {
            @apply flex;
            @apply p-4;
            @apply justify-end;

            color: $primaryTextColor;

            button {
                @apply flex;
                @apply w-12;
                @apply h-12;
                @apply items-center;
                @apply justify-center;
                @apply rounded-full;
                @apply cursor-pointer;
            }

            i:before {
                @apply text-3xl;
            }
        }

        .menu a {
            @apply my-0;
        }
    }
</style>
