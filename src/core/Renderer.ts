import Vue  from "vue";
import Router from "vue-router";
import CompositionApi from "@vue/composition-api";
import MixinLoaded from "@/core/mixins/Loaded";

// Plugins
Vue.use(Router);
Vue.use(CompositionApi);

// Mixins
Vue.mixin(MixinLoaded);

/**
 * Registers all Vue components as global.
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

function registerComponents(): void {
    const paths: string[] = require
        .context("@/components/", true, /\.vue$/, "lazy")
        .keys()
        .map((path: string) => path.replace("./", ""))
        .map((path: string) => path.replace(".vue", ""));

    paths.forEach((path: string) => {
        const componentName = path
            .replace(/^.*[/]/, "")
            .toLowerCase();

        Vue.component(`db-${componentName}`, () => ({
            component: import(`@/components/${path}.vue`),
            loading: Vue.component("db-loading"),
            error: Vue.component("db-error"),
            delay: 200,
            timeout: 3000,
        }));
    });
}

function setupRouter(store: any): Router {
    const { app, template } = store.state.config;

    return new Router({
        mode: "hash", // TODO: Mode should be configurable
        routes: [
            {
                path: "/",
                redirect: app.defaultPageUrl || template.pages[0].url,
            },
            {
                path: "*",
                component: Vue.component("db-page"),
            },
        ],
    });
}
