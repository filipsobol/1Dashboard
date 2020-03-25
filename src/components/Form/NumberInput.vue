<template>
    <db-input
        :name="props.name"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <input
            ref="input"
            type="number"
            :name="props.id"
            :value="value"
            :step="step"
            :min="props.min"
            :max="props.max"
            :placeholder="props.placeholder"
            :required="required"
            :readonly="props.readonly"
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
</template>

<script lang="ts">
    import { defineComponent, computed, ref } from "@vue/composition-api";

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

            // Computed
            const required = computed<boolean>(() => _.props.required ?? true);

            const step = computed<number>(() => _.props.step ?? 1);

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
                _,

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
