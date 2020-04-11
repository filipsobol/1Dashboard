<template>
    <db-input
        :name="props.name"
        :rules="props.rules"
        :errors="errors"
        :customizable="false">
        <label
            v-for="option in props.options"
            :key="option.value">
            <input
                :value="option.value"
                :name="props.id"
                type="radio"
                @click="$emit('input', $event.target.value)">

            <span class="ml-2">
                {{ $t(option.label) }}
            </span>
        </label>
    </db-input>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";
    import { SelectOption } from "@framework/interfaces/components/Form/RadioInput";

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

            errors: {
                type: Array,
                required: false,
                default: () => []
            }
        },

        setup(_) {
            // Methods
            function optionIsActive(option: SelectOption): boolean {
                return _.value === option.value;
            }

            return {
                // State
                _,

                // Methods
                optionIsActive,
            };
        },
    });
</script>

<style lang="scss" scoped>
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
