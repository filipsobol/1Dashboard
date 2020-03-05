<template>
    <div>
        <p v-if="title">{{ title }}</p>
        <p>{{ body }}</p>
        <p v-if="author">{{ author }}</p>
        <p v-if="createdAt">{{ createdAt }}</p>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Article",

        props: {
            title: {
                type: String,
                required: false,
            },
            body: {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: false,
            },
            createdAt: {
                type: String,
                required: false
            }
        }
    });
</script>
