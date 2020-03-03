<template>
    <input :type="type">
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Input",

        props: {
            type: {
                type: String,
                required: true,
            },
        },
    });
</script>
