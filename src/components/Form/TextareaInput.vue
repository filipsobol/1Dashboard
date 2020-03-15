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
    import Vue, { PropType } from "vue";
    import { TextareaInputProps } from "@/interfaces/components/Form/TextareaInput";

    export default Vue.extend({
        name: "TextareaInput",

        props: {
            props: {
                type: Object as PropType<TextareaInputProps>,
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
        },
    });
</script>
