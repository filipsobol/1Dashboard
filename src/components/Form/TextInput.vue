<template>
    <db-input
        :name="props.name"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <input
            type="text"
            :value="props.value"
            :placeholder="props.placeholder"
            :required="props.required"
            :readonly="props.readonly" />
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
        },
    });
</script>
