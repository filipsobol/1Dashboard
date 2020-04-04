module.exports = {
    chainWebpack: config => {
        // Remove the prefetch plugin
        config.plugins.delete("prefetch");
        config.plugins.delete("preload");
    },

    pluginOptions: {
      i18n: {
        localeDir: 'assets/locales',
        enableInSFC: false,
        locale: 'en',
        fallbackLocale: 'en'
      }
    }
};
