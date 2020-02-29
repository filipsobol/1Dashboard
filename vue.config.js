module.exports = {
    chainWebpack: config => {
        // Remove the prefetch plugin
        config.plugins.delete("prefetch");
        config.plugins.delete("preload");
    }
}
