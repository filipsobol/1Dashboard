<template>
    <div>
        <db-sidebar />

        <db-header />

        <router-view :key="$route.fullPath"/>
    </div>
</template>

<script>
import DbHeader from "../Header/Header.vue";
import DbSidebar from "../Sidebar/Sidebar.vue";

export default {
    name: "Db-Application",

    components: {
        DbHeader,
        DbSidebar,
    },
};
</script>
