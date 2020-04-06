import Vue from "vue";
import VueI18n from "vue-i18n";
import { ObjectWithAnyKeys } from "@framework/interfaces/core/Helpers";

Vue.use(VueI18n);

export async function setupInternationalization(config: ObjectWithAnyKeys): Promise<VueI18n> {
    const { locale, fallbackLocale } = config.localization;

    const primaryLocales = await import(/* webpackChunkName: "locale-[request]" */ `@framework/assets/locales/${locale}.json`);
    const fallbackLocales = await import(/* webpackChunkName: "locale-[request]" */ `@framework/assets/locales/${fallbackLocale}.json`);

    return new VueI18n({
      locale,
      fallbackLocale,
      messages: {
          [locale]: primaryLocales.default,
          [fallbackLocale]: fallbackLocales.default
      },
    })
}
