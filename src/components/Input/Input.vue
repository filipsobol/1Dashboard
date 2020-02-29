<template>
    <input :type="type">
</template>

<script>
export default {
    name: "Db-Input",

    props: {
        type: {
            type: String,
            required: true,
        },
    },
};
</script>
