<template>
    <div>{{ text }}</div>
</template>

<script>
export default {
    name: "Db-Text",

    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>
