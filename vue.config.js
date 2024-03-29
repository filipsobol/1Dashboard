/* eslint-disable */
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    chainWebpack: config => {
        config.plugins.delete("prefetch");
        config.plugins.delete("preload");
    },

    outputDir: "packages/framework/dist",

    configureWebpack: {
        entry: {
            app: "./packages/framework/src/main.ts",
        },

        resolve: {
            alias: {
                "@framework": path.resolve(__dirname, "packages/framework/src"),
            },
        },

        plugins: [
            new CopyWebpackPlugin([
                {
                    context: "packages/framework",
                    from: "public",
                },
            ]),
        ],
    },

    pluginOptions: {
      i18n: {},
    },
};
