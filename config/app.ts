import { App } from "@/interfaces/config/App";

const config: App = {
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
     * URL of the page to be displayed when user visits "/".
     */
    defaultPageUrl: "/users",

    /**
     * Optional URL for the favicon, useful when it's not hosted with the application.
     */
    faviconUrl: "/favicon.ico",

    /**
     * Optional type of favicon, defaults to "image/x-icon".
     */
    faviconType: "image/x-icon",

    /**
     * Optional URL for the template, useful when template is not hosted with this project or comes from API.
     */
    templateUrl: undefined,

    /**
     * Timezone used to format dates. It can be overridden on user-level.
     */
    timezone: "Europe/Warsaw",

    /**
     * Language code used to format prices and numbers. It can be overriden on user-level.
     */
    locale: "en_US",

    /**
     * Fallback locale used when primary "locale" is missing translation string.
     */
    fallbackLocale: "en_US",

    /**
     * Optional URL for the localization files.
     */
    localeUrl: undefined,

    /**
     * With debug mode enabled, detailed error messages will be logged to the console.
     */
    debug: true,
};

export default config;
