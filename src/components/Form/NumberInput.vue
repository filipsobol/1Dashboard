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
    import Vue, { PropType } from "vue";
    import { NumberInputProps } from "@/interfaces/components/Form/NumberInput";

    export default Vue.extend({
        name: "NumberInput",

        props: {
            props: {
                type: Object as PropType<NumberInputProps>,
                required: true,
            },

            value: {
                type: Number,
                required: false
            }
        },

        computed: {
            required(): boolean {
                return this.props.required ?? true;
            },

            step(): number {
                return this.props.step ?? 1;
            },

            precision(): number {
                if (Math.floor(this.step) === this.step) {
                    return 0;
                }

                return this.step.toString().split(".")[1].length || 0;
            }
        },

        methods: {
            increment(): void {
                this.$emit("input", this.formatWithPrecision((this.value ?? 0) + this.step));
                (this.$refs.input as HTMLElement).focus();
            },

            decrement(): void {
                this.$emit("input", this.formatWithPrecision((this.value ?? 0) - this.step));
                (this.$refs.input as HTMLElement).focus();
            },

            formatWithPrecision(value: number): number {
                return Number(value.toFixed(this.precision));
            }
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
