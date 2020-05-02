<template>
    <db-input
        :name="props.name"
        :rules="props.rules"
        :errors="errors"
        :prepend-text="props.prependText"
        :append-text="props.appendText"
        :prepend-icon="props.prependIcon"
        :append-icon="props.appendIcon">
        <input
            type="text"
            :name="props.id"
            :value="value"
            :placeholder="props.placeholder"
            :readonly="props.readonly"
            @input="$emit('input', $event.target.value)" />
    </db-input>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";

    export default defineComponent({
        name: "TextInput",

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
