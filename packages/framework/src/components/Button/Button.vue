<template>
    <button
        @click="onClick"
        :type="type"
        :disabled="disabled"
        :class="{ loading }">
        <i
            v-if="props.icon"
            :class="['icon-' + props.icon, 'prop-icon']" />

        <span v-if="props.text">{{ $t(props.text) }}</span>

        <div class="loading-overlay">
            <i class="icon-loader" />
        </div>
    </button>
</template>

<script lang="ts">
    import { defineComponent, computed } from "@vue/composition-api";
    import { ButtonType } from "@framework/interfaces/components/Button";

    export default defineComponent({
        name: "Button",

        props: {
            props: {
                type: [ Object, Function ],
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
                disabled,

                // Methods
                onClick,
            };
        },
    });
</script>

<style lang="scss" scoped>
    button {
        @apply flex;
        @apply flex-row;
        @apply px-8;
        @apply h-12;
        @apply items-center;
        @apply rounded;
        @apply font-bold;
        @apply bg-gray-300;
        @apply text-gray-800;
        @apply shadow-sm;

        // Needed for loading state
        @apply relative;
        @apply overflow-hidden;

        &[disabled] {
            @apply opacity-50;
            @apply cursor-not-allowed;
        }

        &:not([disabled]):hover {
            @apply bg-gray-400;
        }

        &:focus {
            @apply border-blue-100;
            @apply shadow-outline;
        }

        i {
            @apply h-6;
            @apply w-6;
            @apply text-gray-600;
        }

        i + span {
            @apply ml-4;
        }

        & + & {
            @apply ml-3;
        }
    }

    .loading-overlay {
        @apply hidden;
    }

    button.loading {
        .prop-icon,
        span {
            opacity: 0;
        }

        .loading-overlay {
            @apply block;
            @apply absolute;
            @apply w-full;
            @apply h-full;
            @apply top-0;
            @apply left-0;
            @apply flex;
            @apply justify-center;
            @apply items-center;

            i.icon-loader::before {
                @apply text-3xl;

                animation: spin 4000ms infinite linear;
            }
        }
    }
</style>
