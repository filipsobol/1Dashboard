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
                /col-start/,
                /col-end/,
                /^icon-/,
                /^bg-/,
                /^shadow/,
                /^rounded/,
                /^p-/,
                /^text-/
            ]
        },
        autoprefixer: {},
    },
};
