import Vue  from "vue";
import Router from "vue-router";
import CompositionApi from "@vue/composition-api";
import MixinLoaded from "@/core/mixins/Loaded";
import { Page } from "@/interfaces/core/Config";
import { getComponentName } from "@/utils/getComponentName";

// Plugins
Vue.use(Router);
Vue.use(CompositionApi);

// Mixins
Vue.mixin(MixinLoaded);

/**
 * Prepares all pieces required to display the application.
 */
export function setup(store: any): void {
    registerComponents();

    new Vue({
        el: "#app",
        store,
        router: setupRouter(store),
        render: h => h(Vue.component("db-app")),
    });
}

/**
 * Registers all Vue components as global.
 */
function registerComponents(): void {
    const paths: string[] = require
        .context("@/components/", true, /\.vue$/, "lazy")
        .keys()
        .map((path: string) => path.replace("./", ""))
        .map((path: string) => path.replace(".vue", ""));

    paths.forEach((path: string) => {
        Vue.component(getComponentName(path.replace(/^.*[/]/, "")), () => ({
            component: import(`@/components/${path}.vue`),
            loading: Vue.component("db-loading"),
            error: Vue.component("db-error"),
            delay: 200,
            timeout: 3000,
        }));
    });
}

/**
 * Registers all routes defined in the template and redirect for "/" if it's not already defined.
 */
function setupRouter(store: any): Router {
    const { app } = store.state;

    // Map all pages from the template into routes
    const routes = app.pages.map((page: Page) => ({
        path: page.url,
        component: Vue.component(`db-page`),
        props: page,
    }));

    // Add "/" if it's not registered already
    if (!routes.find(({ path }: any) => path === "/")) {
        routes.push({
            path: "/",
            redirect: app.defaultPageUrl || app.pages[0].url,
        });
    }

    // Add 404 page
    routes.push({
        path: "*",
        component: Vue.component(`db-page`),
        props: app.errorPages.notFound,
    });

    // Create Vue Router
    return new Router({
        mode: "history", // TODO: Mode should be configurable
        routes,
    });
}
