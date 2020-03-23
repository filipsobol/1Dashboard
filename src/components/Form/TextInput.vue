<template>
    <db-input
        :name="props.name"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <input
            type="text"
            :name="props.id"
            :value="value"
            :placeholder="props.placeholder"
            :required="required"
            :readonly="props.readonly"
            @input="$emit('input', $event.target.value)" />
    </db-input>
</template>

<script lang="ts">
    import { defineComponent, computed, toRefs } from "@vue/composition-api";
    import { useConfigProps } from "@/core/composable/useConfigProps";
    import { TextInputProps } from "@/interfaces/components/Form/TextInput";

    export default defineComponent({
        name: "TextInput",

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
            const props = useConfigProps<TextInputProps>(_.props);

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
