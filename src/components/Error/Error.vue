<template>
    <div class="alert alert-danger" role="alert">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: "Db-Error",

    props: {
        message: {
            type: String,
            required: false,
            default: "Sorry, component could not be loaded.",
        },
    },
};
</script>

<style lang="scss" scoped>
    div {
        margin: 0;
    }
</style>
