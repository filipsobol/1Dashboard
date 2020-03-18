<template>
    <div class="wrapper">
        <div class="name">{{ props.name }}</div>

        <label
            v-for="option in props.options"
            :key="option.value">
            <input
                :value="option.value"
                :name="props.id"
                :checked="optionIsActive(option)"
                :required="option.required"
                type="checkbox"
                @change="onChange($event.target.value)">

            <i class="icon-check" />

            <span class="ml-2">
                {{ option.label }}
            </span>
        </label>
    </div>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { CheckboxInputProps, CheckboxValue, SelectOption } from '@/interfaces/components/Form/CheckboxInput';

    export default Vue.extend({
        name: "CheckboxInput",

        props: {
            props: {
                type: Object as PropType<CheckboxInputProps>,
                required: true,
            },
            value: {
                type: [Array, Boolean] as PropType<CheckboxValue>,
                required: false,
            },
        },

        methods: {
            optionIsActive(option: SelectOption): boolean {
                if (Array.isArray(this.value)) {
                    return this.value.includes(option.value ?? "");
                }

                return this.value ?? false;
            },

            onChange(value: string): any {
                if (this.props.options.length === 1) {
                    return this.$emit("input", !this.value);
                }

                if (!Array.isArray(this.value)) {
                    return this.$emit("input", [value]);
                }

                if(this.value.includes(value)) {
                    return this.$emit("input", this.value.filter((element: string) => element !== value));
                }

                this.$emit("input", this.value.concat(value));
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
        @apply relative;
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
        @apply rounded;
        @apply border-gray-500;
        @apply bg-white;

        // Transition background color on toggle
        @apply transition-colors;
        @apply duration-200;
        @apply ease-in-out;

        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

        &:not(:checked):hover {
            @apply border-gray-600;
        }
        &:checked {
            @apply bg-gray-600;
            @apply border-gray-600;
        }
        &:focus-within {
            @apply border-0;
            @apply shadow-outline;
        }
    }

    i {
        @apply absolute;
        @apply top-0;
        @apply left-0;
        @apply text-transparent;

        margin-top: 5px;
        margin-left: 2px;

        &::before {
            @apply text-lg;
            @apply font-bold;
        }
    }

    input:checked + i {
        @apply text-gray-100;
    }
</style>
