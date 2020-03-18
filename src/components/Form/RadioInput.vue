<template>
    <div class="wrapper">
        <div class="name">{{ props.name }}</div>

        <label
            v-for="option in props.options"
            :key="option.value">
            <input
                :value="option.value"
                :name="props.id"
                :required="required"
                type="radio"
                @click="$emit('input', $event.target.value)">

            <span class="ml-2">
                {{ option.label }}
            </span>
        </label>
    </div>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { RadioInputProps, SelectOption } from "@/interfaces/components/Form/RadioInput";

    export default Vue.extend({
        name: "RadioInput",

        props: {
            props: {
                type: Object as PropType<RadioInputProps>,
                required: true,
            },
            value: {
                type: String,
                required: false,
            },
        },

        computed: {
            required(): boolean {
                return this.props.required ?? true;
            },
        },

        methods: {
            optionIsActive(option: SelectOption): boolean {
                return this.value === option.value;
            }
        }
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
        @apply flex;
        @apply items-center;
        @apply py-1;

        & + & {
            @apply mt-1;
        }
    }

    input {
        @apply w-6;
        @apply h-6;
        @apply border;
        @apply rounded-full;
        @apply border-gray-500;

        // Transition border on toggle
        @apply transition-all;
        @apply duration-200;
        @apply ease-in-out;

        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

        &:not(:checked):hover {
            @apply border-gray-600;
        }
        &:checked {
            @apply border-8;
            @apply border-gray-600;
            @apply bg-gray-100;
        }
        &:focus-within {
            @apply shadow-outline;
        }
    }
</style>
