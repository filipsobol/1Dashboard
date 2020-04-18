module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",

    moduleNameMapper: {
        "^@framework/(.*)$": "<rootDir>/packages/framework/src/$1",
    }
};
