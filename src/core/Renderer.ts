import Vue  from "vue";
import Router from "vue-router";
import CompositionApi from "@vue/composition-api";
import { Page } from "@/interfaces/core/Config";
import { getComponentName } from "@/utils/nestedComponents";

// Components
import AppComponent from "@/core/components/App.vue";
import PageComponent from "@/core/components/Page.vue";
import ErrorComponent from "@/core/components/Error.vue";
import LoadingComponent from "@/core/components/Loading.vue";

// Plugins
Vue.use(Router);
Vue.use(CompositionApi);

/**
 * Prepares all pieces required to display the application.
 */
export function setup(store: any): void {
    registerComponents();

    new Vue({
        el: "#app",
        store,
        router: setupRouter(store),
        render: h => h(AppComponent),
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
        const componentName = getComponentName(path.replace(/^.*[/]/, ""));

        Vue.component(componentName, () => ({
            component: import(/* webpackChunkName: "[request]" */ `@/components/${path}.vue`),
            loading: LoadingComponent,
            error: ErrorComponent,
            delay: 0,
            timeout: 60000, // 1 minute
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
        component: PageComponent,
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
        component: PageComponent,
        props: app.errorPages.notFound,
    });

    // Create Vue Router
    return new Router({
        mode: "history", // TODO: Mode should be configurable
        routes,
    });
}
