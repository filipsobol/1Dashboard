<template>
    <div>
        <label
            v-for="option in options"
            :key="option.value">
            <input
                :value="option.value"
                :class="{ 'icon-square': !optionIsActive(option), 'icon-check-square': optionIsActive(option) }"
                :checked="optionIsActive(option)"
                type="checkbox">

            <span class="ml-2">
                {{ option.label }}
            </span>
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { SelectOption } from '@/interfaces/components/Form/CheckboxInput';

    export default Vue.extend({
        name: "CheckboxInput",

        props: {
            options: {
                type: Array,
                required: true,
            },
            required: {
                type: Boolean,
                required: false,
                default: false,
            },
            readonly: {
                type: Boolean,
                required: false,
                default: false,
            },
            value: {
                type: [ Boolean, Array ],
                required: false,
            },
        },

        methods: {
            optionIsActive(option: SelectOption): boolean {
                return this.value instanceof Array
                    ? this.value.includes(option.value)
                    : this.value;
            }
        }
    });
</script>

<style lang="scss" scoped>
    label {
        @apply flex;
        @apply items-center;

        & + & {
            @apply mt-2;
        }
    }

    input {
        @apply text-2xl;
        @apply leading-none;
        @apply text-gray-600;

        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }

    span {
        @apply font-medium;
        @apply text-gray-700;
        @apply select-none;
    }
</style>
