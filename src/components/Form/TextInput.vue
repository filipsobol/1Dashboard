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
    import Vue, { PropType } from "vue";
    import { TextInputProps } from "@/interfaces/components/Form/TextInput";

    export default Vue.extend({
        name: "TextInput",

        props: {
            props: {
                type: Object as PropType<TextInputProps>,
                required: true,
            },
            value: {
                type: String,
                required: false,
            },
        },

        computed: {
            required(): boolean {
                return this.props.required ?? true;
            },
        }
    });
</script>
