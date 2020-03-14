<template>
    <div class="wrapper">
        <div class="name">{{ props.name }}</div>

        <label
            v-for="option in props.options"
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
    import Vue, { PropType } from "vue";
    import { CheckboxInputProps, SelectOption } from '@/interfaces/components/Form/CheckboxInput';

    export default Vue.extend({
        name: "CheckboxInput",

        props: {
            props: {
                type: Object as PropType<CheckboxInputProps>,
                required: true,
            }
        },

        methods: {
            optionIsActive(option: SelectOption): boolean {
                if (Array.isArray(this.props.value)) {
                    return this.props.value.includes(option.value);
                }

                return this.props.value ?? false;
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
</style>
