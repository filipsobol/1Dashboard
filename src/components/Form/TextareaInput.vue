<template>
    <db-input :name="props.name">
        <textarea
            :value="value"
            :name="props.id"
            :placeholder="props.placeholder"
            :rows="props.rows"
            :required="required"
            :readonly="props.readonly"
            @input="$emit('input', $event.target.value)" />
    </db-input>
</template>

<script lang="ts">
    import { defineComponent, computed, toRefs } from "@vue/composition-api";
    import { useConfigProps } from "@/core/composable/useConfigProps";
    import { TextareaInputProps } from "@/interfaces/components/Form/TextareaInput";

    export default defineComponent({
        name: "TextareaInput",

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
            const props = useConfigProps<TextareaInputProps>(_.props);

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
