<template>
    <db-input :name="props.name">
        <select
            :name="props.id"
            :required="required"
            :disabled="props.readonly"
            multiple>
            <option
                v-for="option in props.options"
                :key="option.value"
                :value="option.value"
                :selected="optionSelected(option)"
                @mousedown.prevent="toggleOption(option)">
                {{ option.label || option.value }}
            </option>
        </select>
    </db-input>
</template>

<script lang="ts">
    import { defineComponent, computed } from "@vue/composition-api";
    import { MultiSelectOption } from '@/interfaces/components/Form/MultiSelectInput';

    export default defineComponent({
        name: "MultiSelectInput",

        props: {
            props: {
                type: [ Object, Function ],
                required: true,
            },

            value: {
                type: Array,
                required: false,
            },
        },

        setup(_, { emit }) {
            // Computed
            const required = computed<boolean>(() => _.props.required ?? true);

            // Functions
            function toggleOption({ value }: MultiSelectOption): void {
                const values = _.value || [];

                values.includes(value)
                    ? emit("input", values.filter(element => element !== value))
                    : emit("input", values.concat(value));
            }

            function optionSelected({ value }: MultiSelectOption): boolean {
                if (!_.value) {
                    return false;
                }

                return _.value.includes(value);
            }

            return {
                // State
                _,

                // Computed
                required,

                // Methods
                toggleOption,
                optionSelected,
            }
        },
    });
</script>

<style lang="scss" scoped>
    select {
        @apply bg-white;

        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }

    option {
        @apply px-4;
        @apply py-3;
        @apply border;
        @apply rounded;
        @apply border-gray-400;
        @apply overflow-hidden;

        & + & {
            @apply mt-1;
        }

        &:checked {
            background: theme("colors.gray.600") linear-gradient(0deg, theme("colors.gray.600") 0%, theme("colors.gray.600") 100%);
        }
    }
</style>
