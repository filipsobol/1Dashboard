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
    import Vue, { PropType } from "vue";
    import { MultiSelectInputProps, MultiSelectOption } from '@/interfaces/components/Form/MultiSelectInput';

    export default Vue.extend({
        name: "MultiSelectInput",

        props: {
            props: {
                type: Object as PropType<MultiSelectInputProps>,
                required: true,
            },

            value: {
                type: Array,
                required: false,
            },
        },

        computed: {
            required(): boolean {
                return this.props.required ?? true;
            },
        },

        methods: {
            toggleOption({ value }: MultiSelectOption): void {
                const values = this.value || [];

                values.includes(value)
                    ? this.$emit("input", values.filter(element => element !== value))
                    : this.$emit("input", values.concat(value));
            },

            optionSelected({ value }: MultiSelectOption): boolean {
                if (!this.value) {
                    return false;
                }

                return this.value.includes(value);
            }
        }
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
