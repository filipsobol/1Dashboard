<template>
    <DbInput
        :name="name"
        :prepend-text="prependText"
        :append-text="appendText"
        :prepend-icon="prependIcon"
        :append-icon="appendIcon">

        <select>
            <option
                value=""
                disabled
                selected><!-- Remove "disabled" when required -->
                {{ placeholder }}
            </option>

            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value">
                {{ option.label || option.value }}
            </option>
        </select>

        <DBIcon type="chevron-down" />
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
            options: {
                type: Array,
                required: true,
            },
            value: {
                type: String,
                required: false,
                default: "",
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
            },
        },
    });
</script>

<style lang="scss" scoped>
    svg {
        @apply absolute;
        @apply right-0;
        @apply bottom-0;
        @apply mx-3;
        @apply my-3;
        @apply z-10;
        @apply select-none;

    }
    select {
        @apply bg-white;

        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
</style>
