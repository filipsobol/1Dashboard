import { Localization } from "@framework/interfaces/core/Config";

const localization: Localization = {
    /**
     * Timezone used to format dates. It can be overridden on user-level.
     */
    timezone: "Europe/Warsaw",

    /**
     * Language code used to translate text and format prices and numbers.
     */
    locale: "en_US",

    /**
     * Fallback locale used when primary "locale" is missing translation text.
     */
    fallbackLocale: "en_US",
};

export default localization;
