<template>
    <div class="header">
        <div class="mobile-menu">
            <button @click="$emit('toggleMenu')">
                <i class="icon-menu" />
            </button>
        </div>

        <div class="user-menu">
            <div>
                <i class="icon-search" />
            </div>

            <div>
                <i class="icon-message-square" />
            </div>

            <div>
                <i class="icon-bell" />
            </div>

            <div>
                <i class="icon-settings" />
            </div>

            <router-link to="/auth/logout">
                <i class="icon-log-out" />
            </router-link>

            <div>
                <i class="icon-user" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .header {
        @apply flex;
        @apply w-full;
        @apply h-20;
        @apply px-8;
        @apply justify-between;
        @apply items-center;
        @apply border-b;
        @apply bg-white;
    }

    .mobile-menu button {
        @apply hidden;
    }

    .user-menu {
        @apply flex;
        @apply flex-row;
    }

    .mobile-menu,
    .user-menu {
        & > * {
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

        & > * + * {
            @apply ml-2;
        }
    }

    @media (max-width: theme("screens.md.max")) {
        .header {
            @apply px-4;
        }

        .mobile-menu button {
            @apply block;
        }
    }
</style>
