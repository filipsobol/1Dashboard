import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export async function setup(store: any): Promise<VueI18n> {
    const { locale, fallbackLocale } = store.state.localization;

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
