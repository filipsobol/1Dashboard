/* eslint-disable */
const path = require("path");

module.exports = {
    chainWebpack: config => {
        // Remove the prefetch plugin
        config.plugins.delete("prefetch");
        config.plugins.delete("preload");
    },

    configureWebpack: {
        entry: {
            app: "./packages/framework/src/main.ts"
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "packages"),
                "@components": path.resolve(__dirname, "packages/components/src"),
                "@framework": path.resolve(__dirname, "packages/framework/src"),
            }
        }
    },

    pluginOptions: {
      i18n: {}
    }
};
