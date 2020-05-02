<template>
    <db-input
        :name="props.name"
        :rules="props.rules"
        :errors="errors"
        :customizable="false">
        <label>
            <input
                :value="value"
                :name="props.id"
                :checked="active"
                type="checkbox"
                @click="$emit('input', !value)">

            <span class="ml-4">
                {{ $t(props.label) }}
            </span>
        </label>
    </db-input>
</template>

<script lang="ts">
    import { defineComponent, computed } from "@vue/composition-api";

    export default defineComponent({
        name: "ToggleInput",

        props: {
            props: {
                type: Object,
                required: true,
            },

            value: {
                type: Boolean,
                required: false,
            },

            errors: {
                type: Array,
                required: false,
                default: () => [],
            },
        },

        setup(_) {
            // Computed
            const active = computed<boolean>(() => _.value ?? false);

            return {
                // State
                _,

                // Computed
                active,
            };
        },
    });
</script>

<style lang="scss" scoped>
    .wrapper {
        @apply block;
        @apply relative;
        @apply text-gray-700;
        @apply select-none;
    }

    .name {
        @apply mb-2;
        @apply font-medium;
    }

    label {
        @apply relative;
        @apply flex;
        @apply py-1;
        @apply items-center;
        @apply cursor-pointer;
    }

    input {
        @apply relative;
        @apply flex;
        @apply items-center;
        @apply w-12;
        @apply h-6;
        @apply border;
        @apply rounded-full;
        @apply border-gray-500;
        @apply cursor-pointer;

        // Transition background color on toggle
        @apply transition-colors;
        @apply duration-200;
        @apply ease-in-out;

        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

        &:hover {
            @apply border-gray-600;

            &::after {
                @apply bg-gray-600;
            }
        }

        &:focus-within {
            @apply border-blue-300;
            @apply shadow-outline;
        }

        &::after {
            @apply absolute;
            @apply w-4;
            @apply h-4;
            @apply left-0;
            @apply rounded-full;
            @apply bg-gray-600;

            // Transition position of inner circle on toggle
            @apply transition-all;
            @apply duration-200;
            @apply ease-in-out;

            content: "";
        }

        &:not(:checked)::after {
            margin-left: 3px;
        }

        &:checked {
            @apply bg-gray-600;
            @apply border-gray-600;

            &::after {
                @apply bg-gray-100;

                margin-left: calc(100% - (theme("spacing.4") + 3px)); // "spacing.5" corresponds to "w-5" on inner circle
            }
        }
    }
</style>
