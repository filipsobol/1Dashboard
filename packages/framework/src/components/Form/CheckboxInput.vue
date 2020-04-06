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
                :checked="optionIsActive(option)"
                type="checkbox"
                @change="onChange($event.target.value)">

            <i class="icon-check" />

            <span class="ml-2">
                {{ $t(option.label) }}
            </span>
        </label>
    </db-input>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";
    import { SelectOption } from '@framework/interfaces/components/Form/CheckboxInput';

    export default defineComponent({
        name: "CheckboxInput",

        props: {
            props: {
                type: [ Object, Function ],
                required: true,
            },

            value: {
                type: [Array, Boolean],
                required: false,
            },

            errors: {
                type: Array,
                required: false,
                default: () => [],
            },
        },

        setup(_: any, { emit }) {
            function optionIsActive(option: SelectOption): boolean {
                if (Array.isArray(_.value)) {
                    return _.value.includes(option.value ?? "");
                }

                return _.value ?? false;
            }

            function onChange(value: string): void {
                if (_.props.options.length === 1) {
                    return emit("input", !_.value);
                }

                if (!Array.isArray(_.value)) {
                    return emit("input", [value]);
                }

                if (_.value.includes(value)) {
                    return emit("input", _.value.filter((element: string) => element !== value));
                }

                emit("input", _.value.concat(value));
            }

            return {
                // State
                _,

                // Methods
                optionIsActive,
                onChange,
            };
        },
    });
</script>

<style lang="scss" scoped>
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

    i.icon-check {
        @apply absolute;
        @apply left-0;
        @apply text-transparent;
        @apply leading-none;

        margin-left: 2px;

        &::before {
            @apply text-lg;
            @apply font-bold;
        }
    }

    input:checked + i.icon-check {
        @apply text-gray-100;
    }
</style>
