module.exports = {
    plugins: {
        tailwindcss: {},

        "vue-cli-plugin-tailwind/purgecss": {
            content: [
                "./packages/framework/public/**/*.html",
                "./packages/framework/src/**/*.vue"
            ],
            whitelistPatterns: [
                /col-/,
                /rows-/,
                /^icon-/,
                /^text-/,
                /^bg-/,
                /^shadow/,
                /^border/,
                /^rounded/,
                /^p-/,
                /^fade-/,
                /^variable-/,
            ]
        },

        autoprefixer: {},
    },
};
