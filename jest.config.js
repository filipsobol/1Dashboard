module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",

    moduleNameMapper: {
        "^@firebase/(.*)$": "<rootDir>/packages/firebase/src/$1",
        "^@framework/(.*)$": "<rootDir>/packages/framework/src/$1",
    }
};
