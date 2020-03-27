import Vue from "vue";
import Router from "vue-router";
import PageComponent from "@/core/components/Page.vue";
import { Page, PageUrl } from "@/interfaces/core/Config";

Vue.use(Router);

/**
 * Registers all routes defined in the template and redirect for "/" if it's not already defined.
 */
export function setup(store: any): Router {
    // Get all route configuration files
    const context = require.context("@/../config/routes", true, /\.ts$/);

    const pages = context
        .keys()
        .map((key: string) => context(key).default);

    // Save content and status routes to store
    store.commit("update", {
        name: "contentPages",
        value: pages.filter((page: Page) => !isStatusPage(page)),
    });

    store.commit("update", {
        name: "statusPages",
        value: pages.filter((page: Page) => isStatusPage(page)),
    });

    // Group all content routes
    const routes = store.state.contentPages.map((page: Page) => ({
        path: page.url as string,
        component: PageComponent,
        props: page
    }));

    // Register 404 route if it exists
    const notFoundRoute = store.state.statusPages.find(({ url }: Page) => url === PageUrl.NotFound);

    if (notFoundRoute) {
        routes.push({
            path: "*",
            component: PageComponent,
            props: notFoundRoute,
        });
    }

    // Register Vue Router
    return new Router({
        mode: "history", // TODO: Mode should be configurable
        routes,
    });
}

function isStatusPage({ url }: Page): boolean {
    return url in PageUrl;
}
