import Vue from "vue";
import { getComponentName } from "@framework/utils/nestedComponents";

export function registerComponentsGlobally() {
    const paths: string[] = require
        .context("@framework/components", true, /\.vue$/, "lazy")
        .keys()
        .map((path: string) => path.replace("./", ""))
        .map((path: string) => path.replace(".vue", ""));

    paths.forEach((path: string) => {
        const componentName = getComponentName(path.replace(/^.*[/]/, ""));

        Vue.component(componentName, () => ({
            component: import(/* webpackChunkName: "[request]" */ `@framework/components/${path}.vue`),
            // loading: Vue.component("db-loading"),
            // error: Vue.component("db-error"),
            delay: 0,
            timeout: 60000, // 1 minute
        }));
    });
}
