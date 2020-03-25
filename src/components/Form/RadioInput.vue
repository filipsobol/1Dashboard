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
    import { defineComponent, computed } from "@vue/composition-api";
    import { SelectOption } from "@/interfaces/components/Form/RadioInput";

    export default defineComponent({
        name: "RadioInput",

        props: {
            props: {
                type: [ Object, Function ],
                required: true,
            },
            value: {
                type: String,
                required: false,
            },
        },

        setup(_) {
            // Computed
            const required = computed<boolean>(() => _.props.required ?? true);

            // Methods
            function optionIsActive(option: SelectOption): boolean {
                return _.value === option.value;
            }

            return {
                // State
                _,

                // Computed
                required,

                // Methods
                optionIsActive,
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
