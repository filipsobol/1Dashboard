<template>
    <div>{{ text }}</div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Text",

        props: {
            text: {
                type: String,
                required: true,
            },
        },
    });
</script>
