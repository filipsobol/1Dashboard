import Vue from "vue";
import Router from "vue-router";
import { Route } from "vue-router/types/router";
import { Context, Page, PageUrl } from "@framework/interfaces/core/Config";

Vue.use(Router);

/**
 * Registers all routes defined in the template and redirect for "/" if it's not already defined.
 */
export function setupRouter(context: Context): Router {
    // Get all route configuration files
    const files = require.context("@framework/../config/routes", true, /\.ts$/);
    context.configuration.pages = files.keys().map(key => files(key).default);

    // Group all content routes
    const routes = context.configuration.pages.map((page: Page) => ({ path: page.url as string }));

    // Register catch-all route
    routes.push({ path: "*" });

    // Register Vue Router
    const router = new Router({
        mode: context.configuration.routing.mode,
        routes,
    });

    // Add lifecycle hooks
    router.onReady(() => onReady(context));
    router.beforeEach(async (...params) => await beforeEach(context, ...params));
    router.afterEach((...params) => afterEach(context, ...params));

    context.router = router;

    return router;
}

/**
 * Called when router completes the initial navigation.
 */
async function onReady(context: Context): Promise<void> {
    await Promise.all(context.configuration.routing.onReady.map((callback: Function) => callback()));
}

/**
 * Called before every navigation.
 */
async function beforeEach(context: Context, to: Route, from: Route, next: () => void): Promise<void> {
    await context.currentPage?.beforeLeave?.(context);
    const callbacks = await Promise.all(
        context.configuration.routing.beforeEach.map((callback: Function) => callback(to, from, next))
    );

    if (callbacks.every((result) => result)) {
        next();
    }
}

/**
 * Called after every navigation.
 */
async function afterEach(context: Context, to: Route, from: Route): Promise<void> {
    context.route = to;
    await loadCurrentPage(context, to.path);
    await Promise.all(context.configuration.routing.afterEach.map((callback: Function) => callback(to, from)));
}

/**
 * Checks if given page is a status page (404, 500 etc.)
 */
function isStatusPage({ url }: Page): boolean {
    return Object.values(PageUrl).includes(url as any);
}

/**
 * Returns configuration of a page with matching URL.
 */
function findPageByUrl(context: Context, url: string): Page | undefined {
    return context.configuration.pages.find((page: Page) => page.url === url);
}

/**
 * Loads current page and resolves component data.
 */
async function loadCurrentPage(context: Context, url: string): Promise<void> {
    try {
        const page = findPageByUrl(context, url);

        if (!page) {
            return loadCurrentPage(context, PageUrl.NotFound);
        }

        // This is required to remove reactivity
        context.currentPage = { ...page };

        if (typeof context.currentPage.content === "function") {
            const content = await context.currentPage.content(context);

            if (context.route.path === url) {
                // This check is required, because page could've changed before the content of the previous one was resolved
                context.currentPage.content = content;
            }
        }

        await context.currentPage.beforeEnter?.(context);
    } catch (error) {
        return loadCurrentPage(context, PageUrl.InternalError);
    }
}
