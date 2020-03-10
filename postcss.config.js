module.exports = {
    plugins: {
        tailwindcss: {},
        "vue-cli-plugin-tailwind/purgecss": {
            whitelistPatterns: [
                /col-/,
                /rows-/,
                /col-start/,
                /col-end/,
                /^bg-/,
                /^shadow/,
                /^rounded/,
                /^p-/
            ]
        },
        autoprefixer: {},
    },
};
