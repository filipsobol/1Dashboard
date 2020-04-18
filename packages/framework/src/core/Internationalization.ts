import Vue from "vue";
import VueI18n from "vue-i18n";
import { Context } from "@framework/interfaces/core/Config";

Vue.use(VueI18n);

export async function setupInternationalization(context: Context): Promise<VueI18n> {
    const { locale, fallbackLocale } = context.configuration.localization;

    const primaryLocales = await import(/* webpackChunkName: "locale-[request]" */ `@framework/assets/locales/${locale}.json`);
    const fallbackLocales = await import(/* webpackChunkName: "locale-[request]" */ `@framework/assets/locales/${fallbackLocale}.json`);

    return new VueI18n({
        [locale]: primaryLocales.default,
        [fallbackLocale]: fallbackLocales.default,
        ...context.configuration.localization,
    });
}
