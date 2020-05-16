<template>
    <div
        class="dropdown"
        v-click-outside="close"
        @keyup.esc="close">
        <db-button
            :props="button"
            @click="toggle()" />

        <transition
            enter-class="transform opacity-0 scale-95"
            enter-active-class="transition ease-out duration-100"
            enter-to-class="transform opacity-100 scale-100"
            leave-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-100"
            leave-to-class="transform opacity-0 scale-95">
            <div
                v-if="open"
                :class="[ xPosition, yPosition ]"
                class="menu"
                @keyup.enter="close">
                <div>
                    <router-link
                        v-for="(item, index) in _.props.items"
                        :key="index"
                        :to="item.url"
                        :href="item.url">
                        <i
                            v-if="item.icon"
                            :class="'icon-' + item.icon" />

                        <span>
                            {{ $t(item.text) }}
                        </span>
                    </router-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from "@vue/composition-api";
    import { DropdownItem, DropdownXPosition, DropdownYPosition } from "@framework/interfaces/components/Dropdown";
    import { ButtonProps } from "@framework/interfaces/components/Button";

    export default defineComponent({
        name: "AdminSidebar",

        props: {
            props: {
                type: Object,
                required: true,
            },
        },

        setup(_) {
            // State
            const open = ref<boolean>(false);

            // Computed
            const button = computed<ButtonProps>(() => _.props.button);
            const items = computed<Array<DropdownItem>>(() => _.props.items);
            const xPosition = computed<string>(() => _.props.xPosition ?? DropdownXPosition.Bottom);
            const yPosition = computed<string>(() => _.props.yPosition ?? DropdownYPosition.Left);

            // Methods
            function toggle() {
                open.value = !open.value;
            }

            function close() {
                open.value = false;
            }

            return {
                // State
                _,
                open,

                // Computed
                button,
                items,
                xPosition,
                yPosition,

                // Methods
                toggle,
                close,
            };
        },
    });
</script>

<style lang="scss" scoped>
    .dropdown {
        @apply relative;

        .menu {
            @apply absolute;
            @apply w-64;
            @apply -mt-1;
            @apply rounded-md;
            @apply shadow-md;
            @apply z-50;

            div {
                @apply py-1;
                @apply rounded-md;
                @apply bg-white;
                @apply shadow;
            }

            &.left {
                @apply right-0;

                transform: translateX(-100%);
            }
            &.right {
                @apply left-0;

                transform: translateX(-100%);
            }
            &.top {
                @apply top-0;
                @apply -mt-2;

                transform: translateY(-100%);
            }
            &.bottom {
                @apply bottom-0;
                @apply -mb-2;

                transform: translateY(100%);
            }
        }

        a {
            @apply flex;
            @apply flex-row;
            @apply px-4;
            @apply py-3;
            @apply items-center;
            @apply text-sm;
            @apply text-gray-700;

            &:hover {
                @apply bg-gray-200;
            }

            i {
                @apply mr-4;

                &::before {
                    @apply text-2xl;
                }
            }

            span {
                @apply truncate;
            }
        }
    }
</style>
