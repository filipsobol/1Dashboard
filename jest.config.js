module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",

    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/packages/$1",
        "^@framework/(.*)$": "<rootDir>/packages/framework/src/$1",
    }
};
