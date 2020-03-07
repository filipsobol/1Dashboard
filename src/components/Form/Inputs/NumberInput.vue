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
            :placeholder="placeholder" />

        <button
            class="increment-button"
            @click="increment()">
            <DBIcon type="chevron-up" />
        </button>

        <button
            class="decrement-button"
            @click="decrement()">
            <DBIcon type="chevron-down" />
        </button>
    </DbInput>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "NumberInput",

        components: {
            DbInput: Vue.component("db-input"),
            DBIcon: Vue.component("db-icon"),
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
            value: {
                type: Number,
                required: false,
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
