<template>
    <button
        @click="onClick"
        :type="type"
        :disabled="disabled"
        :class="{ loading }">
        <i
            v-if="props.icon"
            :class="['icon-' + props.icon, 'prop-icon']" />

        <span v-if="props.text">{{ props.text }}</span>

        <div class="loading-overlay">
            <i class="icon-loader" />
        </div>
    </button>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { ButtonProps, ButtonType } from "@/interfaces/components/Button";

    export default Vue.extend({
        name: "Button",

        props: {
            props: {
                type: Object as PropType<ButtonProps>,
                required: true,
            },
            loading: {
                type: Boolean,
                required: false,
                default: false,
            },
        },

        computed: {
            type(): ButtonType {
                return this.props.type ?? ButtonType.Button;
            },

            disabled(): boolean {
                return this.props.disabled
                    ?? this.loading
                    ?? false;
            }
        },

        methods: {
            onClick(): void {
                this.$emit('click');

                // TODO: Support event from template
            }
        }
    });
</script>

<style lang="scss" scoped>
    button {
        @apply flex;
        @apply flex-row;
        @apply px-6;
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
            @apply text-gray-600;
        }

        i + span {
            @apply ml-3;
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
