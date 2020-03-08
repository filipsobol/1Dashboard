<template>
    <div>
        <label
            v-for="option in options"
            :key="option.value">
            <input
                :value="option.value"
                :class="{ 'icon-circle': value !== option.value, 'icon-check-circle': value === option.value }"
                type="radio">

            <span class="ml-2">
                {{ option.label }}
            </span>
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "RadioInput",

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
                type: String,
                required: false,
                default: "",
            },
        },
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
