import Vue from "vue";
import Router from "vue-router";
import PageComponent from "@framework/core/components/Page.vue";
import { Page, PageUrl } from "@framework/interfaces/core/Config";
import { ObjectWithAnyKeys } from "@framework/interfaces/core/Helpers";

Vue.use(Router);

/**
 * Registers all routes defined in the template and redirect for "/" if it's not already defined.
 */
export function setupRouter(config: ObjectWithAnyKeys): Router {
    // Get all route configuration files
    const context = require.context("@framework/../config/routes", true, /\.ts$/);

    const pages = context
        .keys()
        .map((key: string) => context(key).default);

    config.contentPages = pages.filter((page: Page) => !isStatusPage(page));
    config.statusPages = pages.filter((page: Page) => isStatusPage(page));

    // Group all content routes
    const routes = config.contentPages.map((page: Page) => ({
        path: page.url as string,
        component: PageComponent,
        props: page
    }));

    // Register 404 route if it exists
    const notFoundRoute = config.statusPages.find(({ url }: Page) => url === PageUrl.NotFound);

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
