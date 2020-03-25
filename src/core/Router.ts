import Vue from "vue";
import Router from "vue-router";
import PageComponent from "@/core/components/Page.vue";
import { Page } from "@/interfaces/core/Config";

Vue.use(Router);

/**
 * Registers all routes defined in the template and redirect for "/" if it's not already defined.
 */
export function setup(store: any): Router {
    const context = require.context("@/../config/routes", true, /\.ts$/);

    const pages = context
        .keys()
        .map((key: string) => context(key).default);

    store.commit("update", {
        name: "pages",
        value: pages.filter(({ url }: Page) => !url.includes("*")),
    });

    // Create Vue Router
    return new Router({
        mode: "history", // TODO: Mode should be configurable
        routes: pages.map((page: Page) => ({
            path: page.url,
            component: PageComponent,
            props: page,
        })),
    });
}
