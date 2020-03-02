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

<script>
    export default {
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
                type: Number,
                default: 24
            }
        }
    }
</script>
