import { Localization } from "@/interfaces/core/Config";

const localization: Localization = {
    /**
     * Timezone used to format dates. It can be overridden on user-level.
     */
    timezone: "Europe/Warsaw",

    /**
     * Language code used to format prices and numbers. It can be overridden on user-level.
     */
    locale: "en_US",

    /**
     * Fallback locale used when primary "locale" is missing translation string.
     */
    fallbackLocale: "en_US",

    /**
     * Optional URL for the localization files.
     */
    locales: undefined,
};

export default localization;
