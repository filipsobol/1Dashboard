<template>
    <svg
        :width="size"
        :height="size"
        fill="none"
        stroke="currentColor"
        :stroke-width="width"
        stroke-linecap="round"
        stroke-linejoin="round">
        <use :xlink:href="'icons/feathers.svg#' + type"/>
    </svg>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Icon",

        props: {
            type: {
                type: String,
                required: true
            },
            width: {
                type: Number,
                default: 2
            },
            size: {
                type: [String, Number],
                default: 24
            }
        }
    });
</script>
