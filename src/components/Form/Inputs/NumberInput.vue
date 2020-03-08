<template>
    <DbInput
        :name="name"
        :prepend-text="prependText"
        :append-text="appendText"
        :prepend-icon="prependIcon"
        :append-icon="appendIcon">
        <input
            type="number"
            :value="value"
            :step="step"
            :min="min"
            :max="max"
            :placeholder="placeholder"
            :required="required"
            :readonly="readonly"/>

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
    </DbInput>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "NumberInput",

        components: {
            DbInput: Vue.component("db-input"),
        },

        props: {
            name: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            required: {
                type: Boolean,
                required: false,
                default: false
            },
            readonly: {
                type: Boolean,
                required: false,
                default: false
            },
            value: {
                type: Number,
                required: false,
                default: 0,
            },
            step: {
                type: Number,
                required: false,
                default: 1,
            },
            min: {
                type: Number,
                required: false,
            },
            max: {
                type: Number,
                required: false,
            },
            prependText: {
                type: String,
                required: false,
            },
            appendText: {
                type: String,
                required: false,
            },
            prependIcon: {
                type: String,
                required: false,
            },
            appendIcon: {
                type: String,
                required: false,
            }
        },

        methods: {
            increment(): void {
                this.$emit("input", this.value + this.step);
            },

            decrement(): void {
                this.$emit("input", this.value - this.step);
            },
        },
    });
</script>

<style lang="scss" scoped>
    .increment-button {
        @apply pl-3;
        @apply pr-1;
    }
    .decrement-button {
        @apply pl-1;
        @apply pr-3;
    }
</style>
