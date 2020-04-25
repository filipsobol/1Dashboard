import Vue from "vue";
import { getComponentName } from "@framework/utils/nestedComponents";
import ErrorComponent from "@framework/core/components/Error.vue";
import LoadingComponent from "@framework/core/components/Loading.vue";

export function registerComponentsGlobally() {
    Vue.component(getComponentName("error"), ErrorComponent);
    Vue.component(getComponentName("loading"), LoadingComponent);

    const paths: string[] = require
        .context("@framework/components", true, /\.vue$/, "lazy")
        .keys()
        .map((path: string) => path.replace("./", ""))
        .map((path: string) => path.replace(".vue", ""));

    paths.forEach((path: string) => {
        const componentName = getComponentName(path.replace(/^.*[/]/, ""));

        Vue.component(componentName, () => ({
            component: import(/* webpackChunkName: "[request]" */ `@framework/components/${path}.vue`),
            loading: LoadingComponent,
            error: ErrorComponent,
            delay: 0,
            timeout: 60000, // 1 minute
        }));
    });
}
