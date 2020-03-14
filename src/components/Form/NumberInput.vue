<template>
    <db-input
        :name="props.name"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <input
            type="number"
            :value="props.value"
            :step="props.step"
            :min="props.min"
            :max="props.max"
            :placeholder="props.placeholder"
            :required="props.required"
            :readonly="props.readonly"/>

        <button
            class="increment-button"
            @click="increment()">
            <i class="icon-chevron-up" />
        </button>

        <button
            class="decrement-button"
            @click="decrement()">
            <i class="icon-chevron-down" />
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
        },

        methods: {
            increment(): void {
                this.$emit("input", (this.props.value || 0) + (this.props.step || 1));
            },

            decrement(): void {
                this.$emit("input", (this.props.value || 0) - (this.props.step || 1));
            },
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
