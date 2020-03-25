import Vue from "vue";
import ErrorComponent from "@/core/components/Error.vue";
import LoadingComponent from "@/core/components/Loading.vue";
import { getComponentName } from "@/utils/nestedComponents";

export function setup() {
    const paths: string[] = require
        .context("@/components/", true, /\.vue$/, "lazy")
        .keys()
        .map((path: string) => path.replace("./", ""))
        .map((path: string) => path.replace(".vue", ""));

    paths.forEach((path: string) => {
        const componentName = getComponentName(path.replace(/^.*[/]/, ""));

        Vue.component(componentName, () => ({
            component: import(/* webpackChunkName: "[request]" */ `@/components/${path}.vue`),
            loading: LoadingComponent,
            error: ErrorComponent,
            delay: 0,
            timeout: 60000, // 1 minute
        }));
    });
}
