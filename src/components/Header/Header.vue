<template>
    <nav class="navbar navbar-expand-lg navbar-light border-bottom">
        <div class="container d-flex justify-content-between">
            <a
                class="navbar-brand"
                href="#">
                {{ app.title }}
            </a>

            <div class="collapse navbar-collapse flex-grow-0">
                <nav class="nav">
                    <router-link
                        v-for="page in template.pages"
                        :key="page.url"
                        :to="page.url"
                        active-class="active"
                        class="nav-link"
                        tag="a">
                        {{ page.title }}
                    </router-link>
                </nav>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Db-Header",

    computed: {
        ...mapState("config", [
            "app",
            "template",
        ]),
    },
};
</script>
