import { App } from "@framework/interfaces/core/Config";

const app: App = {
    /**
     * With debug mode enabled, detailed error messages will be logged to the console.
     */
    debug: true,

    /**
     * URL of the application, used to links and assets.
     */
    url: "http://localhost:8080",

    /**
     * Name of the application displayed in the page header.
     */
    title: "1Dashboard",

    /**
     * Description of the application, especially useful if you care about SEO.
     */
    description: "",

    /**
     * List of keywords associated with the application, especially useful if you care about SEO.
     */
    keywords: "",

    /**
     * URL of the light company logo.
     */
    lightLogoUrl: "/light_logo.svg",

    /**
     * URL of the dark company logo.
     */
    darkLogoUrl: "/dark_logo.svg",

    /**
     * Optional URL of the favicon, useful when it's not hosted with the application.
     */
    faviconUrl: "/favicon.ico",

    /**
     * Optional type of favicon, defaults to "image/x-icon".
     */
    faviconType: "image/x-icon",

    /**
     * URL of the page to be displayed when user visits "/".
     */
    defaultPageUrl: "/",

    /**
     * Name of the layout component used for pages that don't have it overridden.
     */
    defaultLayout: "AdminLayout",
};

export default app;
