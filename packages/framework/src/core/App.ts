import Vue from "vue";

// This part can be removed after upgrade to Vue 3
import CompositionApi from "@vue/composition-api";
Vue.use(CompositionApi);

import "@framework/core/directives/ClickOutside";

// Load core services
import { setupRouter } from "@framework/core/Router";
import { setupResources } from "@framework/core/Resources";
import { registerComponentsGlobally } from "@framework/core/Components";
import { setupInternationalization } from "@framework/core/Internationalization";
import { Context } from "@framework/interfaces/core/Config";
import AppComponent from "@framework/core/components/App.vue";

// Load styles
import "@framework/assets/styles/_core.scss";

/**
 * Sets up application based on provided configuration and renders it.
 */
export async function startApplication(context: Context): Promise<void> {
    registerComponentsGlobally();
    setupResources(context);
    await renderApp(context);
}

/**
 * Creates Vue root instance, routing etc. and renders application.
 */
async function renderApp(context: Context): Promise<void> {
    new Vue({
        el: "#app",
        i18n: await setupInternationalization(context),
        router: setupRouter(context),
        render: h => h(AppComponent, {
            props: {
                context
            }
        }),
    });
}
