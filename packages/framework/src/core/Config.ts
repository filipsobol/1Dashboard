export function loadConfiguration() {
    const context = require.context("@framework/../config", false, /\.ts$/);

    const configs = context
        .keys()
        .map((key: string) => [
            key.replace("./", "").replace(".ts", ""),
            context(key).default
        ]);

    return Object.fromEntries(configs);
}
