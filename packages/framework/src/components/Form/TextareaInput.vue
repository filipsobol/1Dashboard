<template>
    <db-input
        :name="props.name"
        :rules="props.rules"
        :errors="errors">
        <textarea
            :value="value"
            :name="props.id"
            :placeholder="props.placeholder"
            :rows="props.rows"
            :readonly="props.readonly"
            @input="$emit('input', $event.target.value)" />
    </db-input>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";

    export default defineComponent({
        name: "TextareaInput",

        props: {
            props: {
                type: Object,
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
