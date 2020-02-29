<template>
    <input :type="type">
</template>

<script>
export default {
    name: "Input",

    props: {
        type: {
            type: String,
            required: true,
        },
    },
};
</script>
