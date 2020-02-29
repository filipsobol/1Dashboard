<template>
    <div>
        <db-header />

        <router-view :key="$route.fullPath"/>
    </div>
</template>

<script>
import DbHeader from "../Header/Header.vue";

export default {
    name: "Db-Application",

    components: {
        DbHeader,
    },
};
</script>
