<template>
    <db-input
        :name="props.name"
        :rules="props.rules"
        :errors="errors"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <div
            class="select"
            v-click-outside="close"
            @keyup.esc="close()">
            <input
                v-model="searchTerm"
                :name="props.id"
                :readonly="isReadonly"
                :placeholder="props.placeholder"
                type="text"
                class="search"
                autocomplete="off"
                @mousedown="open()"
                @keyup="open()"
                @focus="open()"
                @blur="close()"
                @keyup.enter="selectOption(highlightedOption)"
                @keyup.down.prevent="highlightNextOption()"
                @keyup.up.stop.prevent="highlightPreviousOption()">

            <i class="icon-chevron-down" />

            <div
                v-show="optionsAreVisible"
                class="options">
                <template v-if="filteredOptions.length">
                    <div

                        v-for="option in filteredOptions"
                        :key="option.value"
                        :class="{ selected: selectedOption === option, highlighted: highlightedOption === option }"
                        class="option"
                        @mousedown.stop.prevent="selectOption(option)">
                        {{ $t(option.label || option.value) }}
                    </div>
                </template>

                <template v-else>
                    <div class="no-results">{{ $t("No matching result") }}</div>
                </template>
            </div>
        </div>
    </db-input>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from "@vue/composition-api";
    import { SelectOption } from '@framework/interfaces/components/Form/SelectInput';

    export default defineComponent({
        name: "SelectInput",

        props: {
            props: {
                type: Object,
                required: true,
            },

            value: {
                type: String,
                required: false,
            },

            errors: {
                type: Array,
                required: false,
                default: () => [],
            },
        },

        setup(_, { emit }) {
            // State
            const searchTerm = ref<string>("");
            const optionsAreVisible = ref<boolean>(false);
            const selectedOption = ref<SelectOption | null>(null);
            const highlightedOption = ref<SelectOption | null>(null);

            // Computed
            const isReadonly = computed<boolean>(() => _.props.readonly || !_.props.searchable);

            const filteredOptions = computed<Array<SelectOption>>(() => {
                const options = _.props.options;
                const term = searchTerm.value.trim().toLowerCase();
                const selectedOptionLabel = selectedOption.value?.label.trim().toLowerCase();

                return selectedOptionLabel === term
                    ? options
                    : options.filter(({  label }: SelectOption) => label.toLowerCase().includes(term));
            });

            // Methods
            function open(): void {
                if (optionsAreVisible.value) {
                    return;
                }

                optionsAreVisible.value = true;
            }

            function close(): void {
                if (!optionsAreVisible.value) {
                    return;
                }

                searchTerm.value = selectedOption.value?.label ?? "";
                optionsAreVisible.value = false;
            }

            function selectOption(option?: SelectOption): void {
                if (option) {
                    selectedOption.value = option;
                    emit("input", option.value);
                }

                close();
            }

            function highlightNextOption(): void {
                const options = filteredOptions.value;

                if (!options) {
                    return;
                }

                const highlightedValue = highlightedOption.value?.value;
                const currentIndex = options.findIndex(({ value }: SelectOption) => value === highlightedValue);

                highlightedOption.value = currentIndex >= 0 && currentIndex < (options.length - 1)
                    ? options[currentIndex + 1]
                    : options[0];
            }

            function highlightPreviousOption(): void {
                const options = filteredOptions.value;

                if (!options) {
                    return;
                }

                const highlightedValue = highlightedOption.value?.value;
                const currentIndex = options.findIndex(({ value }: SelectOption) => value === highlightedValue);

                highlightedOption.value = currentIndex > 0 && currentIndex < options.length
                    ? options[currentIndex - 1]
                    : options[options.length - 1];
            }

            return {
                // State
                _,
                searchTerm,
                optionsAreVisible,
                selectedOption,
                highlightedOption,

                // Computed
                isReadonly,
                filteredOptions,

                // Methods
                open,
                close,
                selectOption,
                highlightNextOption,
                highlightPreviousOption,
            };
        },
    });
</script>

<style lang="scss" scoped>
    .select {
        @apply w-full;

        .search,
        .search[readonly] {
            @apply w-full;
            @apply bg-white;
            @apply cursor-pointer;
        }
    }

    .options {
        @apply absolute;
        @apply w-full;
        @apply mt-2;
        @apply py-1;
        @apply border;
        @apply border-gray-400;
        @apply rounded;
        @apply bg-white;
        @apply shadow-md;
        @apply z-50;

        .option,
        .no-results {
            @apply px-4;
            @apply py-2;
        }

        .option {
            &:hover,
            &.highlighted {
                @apply bg-gray-100;
            }

            &.selected {
                @apply bg-gray-200;
            }
        }

        .no-results {
            @apply font-medium;
        }
    }

    .input {
        @apply relative;
        @apply w-full;
        @apply flex;

        i {
            @apply absolute;
            @apply flex;
            @apply items-center;
            @apply top-0;
            @apply right-0;
            @apply px-3;
            @apply h-full;
            @apply z-10;
            @apply pointer-events-none;
        }
    }
</style>
