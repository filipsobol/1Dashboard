<template>
    <DbInput :name="name">
        <textarea
            v-model="value"
            :placeholder="placeholder"
            :rows="rows"
            :required="required"
            :readonly="readonly" />
    </DbInput>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "TextareaInput",

        components: {
            DbInput: Vue.component("db-input"),
        },

        props: {
            name: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            required: {
                type: Boolean,
                required: false,
                default: false
            },
            readonly: {
                type: Boolean,
                required: false,
                default: false
            },
            value: {
                type: String,
                required: false,
                default: "",
            },
            rows: {
                type: Number,
                required: false,
                default: 5,
            },
        }
    });
</script>
