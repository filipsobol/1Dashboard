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
    import { defineComponent, computed } from "@vue/composition-api";

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
            // Computed
            const required = computed<boolean>(() => _.props.required ?? true);

            return {
                // State
                _,

                // Computed
                required,
            };
        },
    });
</script>
