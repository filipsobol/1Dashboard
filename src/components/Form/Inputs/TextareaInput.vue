<template>
    <db-input :name="props.name">
        <textarea
            :value="props.value"
            :placeholder="props.placeholder"
            :rows="props.rows"
            :required="props.required"
            :readonly="props.readonly" />
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
        },
    });
</script>
