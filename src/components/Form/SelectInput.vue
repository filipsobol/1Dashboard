<template>
    <db-input
        :name="props.name"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <select
            :value="value"
            :name="props.id"
            :required="required"
            :disabled="props.readonly"
            @change="$emit('input', $event.target.value)">
            <option value="">
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
    import { defineComponent, computed,  toRefs } from "@vue/composition-api";
    import { useConfigProps } from "@/core/composable/useConfigProps";
    import { SelectInputProps } from '@/interfaces/components/Form/SelectInput';

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
        },

        setup(_) {
            // State
            const props = useConfigProps<SelectInputProps>(_.props);

            // Computed
            const required = computed<boolean>(() => props.data.required ?? true);

            return {
                // State
                ...toRefs(props),

                // Computed
                required,
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
