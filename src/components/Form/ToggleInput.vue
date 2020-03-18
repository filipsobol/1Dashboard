<template>
    <div class="wrapper">
        <div class="name">{{ props.name }}</div>

        <label>
            <input
                :value="value"
                :name="props.id"
                :checked="active"
                :required="required"
                type="checkbox"
                @click="$emit('input', !value)">
            <span class="ml-4">
                {{ props.label }}
            </span>
        </label>
    </div>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { ToggleInputProps } from '@/interfaces/components/Form/ToggleInput';

    export default Vue.extend({
        name: "RadioInput",

        props: {
            props: {
                type: Object as PropType<ToggleInputProps>,
                required: true,
            },
            value: {
                type: Boolean,
                required: false,
            },
        },

        computed: {
            active(): boolean {
                return this.value ?? false;
            },

            required(): boolean {
                return this.props.required ?? true;
            },
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
        @apply w-16;
        @apply h-8;
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
            @apply w-5;
            @apply h-5;
            @apply top-0;
            @apply left-0;
            @apply rounded-full;
            @apply bg-gray-600;

            // Transition position of inner circle on toggle
            @apply transition-all;
            @apply duration-200;
            @apply ease-in-out;

            content: "";
            margin-top: 4px;
        }

        &:not(:checked)::after {
            margin-left: 5px;
        }

        &:checked {
            @apply bg-gray-600;
            @apply border-gray-600;

            &::after {
                @apply bg-gray-100;

                margin-left: calc(100% - (theme("spacing.5") + 4px)); // "spacing.5" corresponds to "w-5" on inner circle
            }
        }
    }
</style>
