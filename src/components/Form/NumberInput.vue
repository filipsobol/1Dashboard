<template>
    <div>
        <div v-if="data">
            <db-input
                :name="data.name"
                :prepend-text="data.prependText"
                :append-text="data.appendText"
                :prepend-icon="data.prependIcon"
                :append-icon="data.appendIcon">
                <input
                    ref="input"
                    type="number"
                    :name="data.id"
                    :value="value"
                    :step="step"
                    :min="data.min"
                    :max="data.max"
                    :placeholder="data.placeholder"
                    :required="required"
                    :readonly="data.readonly"
                    @input="$emit('input', Number($event.target.value))" />

                <button
                    type="button"
                    class="increment-button"
                    tabindex="-1"
                    aria-label="Increment"
                    @click="increment()">
                    <i class="icon-plus" />
                </button>

                <button
                    type="button"
                    class="decrement-button"
                    tabindex="-1"
                    aria-label="Decrement"
                    @click="decrement()">
                    <i class="icon-minus" />
                </button>
            </db-input>
        </div>

        <div v-else-if="fetching">
            Loading...
        </div>

        <div v-else-if="error">
            {{ error }}
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, computed, ref, toRefs } from "@vue/composition-api";
    import { useConfigProps } from "@/core/composable/useConfigProps";
    import { NumberInputProps } from "@/interfaces/components/Form/NumberInput";

    export default defineComponent({
        name: "NumberInput",

        props: {
            props: {
                type: [ Object, Function ],
                required: true,
            },

            value: {
                type: Number,
                required: false
            }
        },

        setup(_, { emit }) {
            // Template refs
            const input = ref<HTMLElement>(null);

            // State
            const props = useConfigProps<NumberInputProps>(_.props);

            // Computed
            const required = computed<boolean>(() => props.data.required ?? true);

            const step = computed<number>(() => props.data.step ?? 1);

            const precision = computed(() => {
                if (Math.floor(step.value) === step.value) {
                    return 0;
                }

                return step.value.toString().split(".")[1].length || 0;
            });

            // Function available in the template
            function increment() {
                emit("input", formatWithPrecision((_.value ?? 0) + step.value));
                focusInput();
            }

            function decrement() {
                emit("input", formatWithPrecision((_.value ?? 0) - step.value));
                focusInput();
            }

            // Helper functions
            const focusInput = (): void => input.value?.focus();
            const formatWithPrecision = (value: number): number => Number(value.toFixed(precision.value));

            return {
                // Template refs
                input,

                // State
                ...toRefs(props),

                // Computed
                required,
                step,
                precision,

                // Methods
                increment,
                decrement
            };
        },
    });
</script>

<style lang="scss" scoped>
    input {
        @apply pr-0 #{!important};
    }

    .increment-button {
        @apply pl-2;
        @apply pr-1;
        @apply bg-transparent;
    }

    .decrement-button {
        @apply pl-1;
        @apply pr-2;
        @apply bg-transparent;
    }
</style>
