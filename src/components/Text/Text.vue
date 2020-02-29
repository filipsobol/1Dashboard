<template>
    <div>{{ text }}</div>
</template>

<script>
export default {
    name: "Text",

    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>
