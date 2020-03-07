<template>
    <DbInput
        :name="name"
        :prepend-text="prependText"
        :append-text="appendText"
        :prepend-icon="prependIcon"
        :append-icon="appendIcon">
        <input
            type="text"
            :value="value"
            :placeholder="placeholder" />
    </DbInput>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "TextInput",

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
            value: {
                type: String,
                required: false,
            },
            prependText: {
                type: String,
                required: false,
            },
            appendText: {
                type: String,
                required: false,
            },
            prependIcon: {
                type: String,
                required: false,
            },
            appendIcon: {
                type: String,
                required: false,
            }
        },
    });
</script>
