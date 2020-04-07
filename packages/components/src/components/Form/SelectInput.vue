<template>
    <db-input
        :name="props.name"
        :rules="props.rules"
        :errors="errors"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <select
            :value="value"
            :name="props.id"
            :disabled="props.readonly"
            @change="$emit('input', $event.target.value)">
            <option value="">
                {{ $t(props.placeholder) }}
            </option>

            <option
                v-for="option in props.options"
                :key="option.value"
                :value="option.value">
                {{ $t(option.label || option.value) }}
            </option>
        </select>

        <i class="icon-chevron-down" />
    </db-input>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";

    export default defineComponent({
        name: "SelectInput",

        props: {
            props: {
                type: [ Object, Function ],
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

        setup(_) {
            return {
                // State
                _,
            };
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
