<template>
    <button>{{ text }}</button>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Button",

        props: {
            text: {
                type: String,
                required: true,
            },
        },
    });
</script>
