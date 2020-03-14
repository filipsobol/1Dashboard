<template>
    <db-input
        :name="props.name"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <select
            :value="props.value"
            :disabled="props.readonly">
            <option
                value=""
                :disabled="props.required">
                {{ props.placeholder }}
            </option>

            <option
                v-for="option in props.options"
                :key="option.value"
                :value="option.value">
                {{ option.label || option.value }}
            </option>
        </select>

        <i class="icon-chevron-down" />
    </db-input>
</template>

<script lang="ts">
    import Vue, { PropType } from "vue";
    import { SelectInputProps } from '@/interfaces/components/Form/SelectInput';

    export default Vue.extend({
        name: "NumberInput",

        props: {
            props: {
                type: Object as PropType<SelectInputProps>,
                required: true,
            }
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
