<template>
    <button
        @click="onClick"
        :type="type"
        :disabled="disabled || loading"
        :class="styles"
        class="btn">
        <i
            v-if="props.icon"
            :class="['icon-' + props.icon, 'prop-icon']" />

        <span v-if="props.text">{{ $t(props.text) }}</span>

        <div
            v-if="loading"
            class="loading-overlay">
            <i class="icon-loader" />
        </div>
    </button>
</template>

<script lang="ts">
    import { defineComponent, computed } from "@vue/composition-api";
    import { ButtonStyle, ButtonType } from "@framework/interfaces/components/Button";

    export default defineComponent({
        name: "Button",

        props: {
            props: {
                type: Object,
                required: true,
            },
            events: {
                type: Array,
                required: false,
            },
            loading: {
                type: Boolean,
                required: false,
                default: false,
            },
        },

        setup(_, { emit }) {
            // Computed
            const type = computed<ButtonType>(() => _.props.type ?? ButtonType.Button);
            const styles = computed<Array<string>>(() => [
                _.loading && "loading",
                _.props.style || ButtonStyle.Gray
            ]);
            const disabled = computed<boolean>(() => _.props.disabled ?? _.loading ?? false);

            function onClick(): void {
                emit("click");

                _.events
                    ?.filter((event: any) => event.on === "click")
                    .forEach((event: any) => event.callback());
            }

            return {
                // State
                _,

                // Computed
                type,
                styles,
                disabled,

                // Methods
                onClick,
            };
        },
    });
</script>

<style lang="scss" scoped>
    .btn {
        @apply flex;
        @apply flex-row;
        @apply px-8;
        @apply h-12;
        @apply items-center;
        @apply rounded;
        @apply font-bold;
        @apply shadow-sm;

        // Needed for loading state
        @apply relative;
        @apply overflow-hidden;

        &[disabled] {
            @apply opacity-50;
            @apply cursor-not-allowed;
        }

        &:focus {
            @apply border-blue-100;
            @apply shadow-outline;
        }

        i {
            @apply h-6;
            @apply w-6;
        }

        i + span {
            @apply ml-4;
        }

        & + & {
            @apply ml-3;
        }
    }

    .loading {
        .prop-icon,
        span {
            opacity: 0;
        }

        &-overlay {
            @apply block;
            @apply absolute;
            @apply w-full;
            @apply h-full;
            @apply top-0;
            @apply left-0;
            @apply flex;
            @apply justify-center;
            @apply items-center;

            i {
                @apply h-8;
                @apply w-8;

                &.icon-loader::before {
                    @apply text-3xl;

                    animation: spin 4000ms infinite linear;
                }
            }
        }
    }

    .btn-gray {
        @apply bg-gray-300;
        @apply text-gray-800;

        i {
            @apply text-gray-600;
        }

        &:not([disabled]):hover {
            @apply bg-gray-400;
        }
    }

    .btn-red {
        @apply bg-red-300;
        @apply text-red-800;

        i {
            @apply text-red-600;
        }

        &:not([disabled]):hover {
            @apply bg-red-400;
        }
    }

    .btn-orange {
        @apply bg-orange-300;
        @apply text-orange-800;

        i {
            @apply text-orange-600;
        }

        &:not([disabled]):hover {
            @apply bg-orange-400;
        }
    }

    .btn-yellow {
        @apply bg-yellow-300;
        @apply text-yellow-800;

        i {
            @apply text-yellow-600;
        }

        &:not([disabled]):hover {
            @apply bg-yellow-400;
        }
    }

    .btn-blue {
        @apply bg-blue-300;
        @apply text-blue-800;

        i {
            @apply text-blue-600;
        }

        &:not([disabled]):hover {
            @apply bg-blue-400;
        }
    }

    .btn-indigo {
        @apply bg-indigo-300;
        @apply text-indigo-800;

        i {
            @apply text-indigo-600;
        }

        &:not([disabled]):hover {
            @apply bg-indigo-400;
        }
    }

    .btn-purple {
        @apply bg-purple-300;
        @apply text-purple-800;

        i {
            @apply text-purple-600;
        }

        &:not([disabled]):hover {
            @apply bg-purple-400;
        }
    }

    .btn-pink {
        @apply bg-pink-300;
        @apply text-pink-800;

        i {
            @apply text-pink-600;
        }

        &:not([disabled]):hover {
            @apply bg-pink-400;
        }
    }

    .btn-light {
        @apply bg-transparent;
        @apply text-gray-300;
        @apply shadow-none;

        i {
            @apply text-gray-400;
        }

        &:not([disabled]):hover {
            @apply text-gray-200;

            i {
                @apply text-gray-300;
            }
        }
    }

    .btn-dark {
        @apply bg-transparent;
        @apply text-gray-700;
        @apply shadow-none;

        i {
            @apply text-gray-600;
        }

        &:not([disabled]):hover {
            @apply text-gray-900;

            i {
                @apply text-gray-700;
            }
        }
    }
</style>
