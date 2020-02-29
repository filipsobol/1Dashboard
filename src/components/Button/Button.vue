<template>
    <button>{{ text }}</button>
</template>

<script>
export default {
    name: "Db-Button",

    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>
