import Vue from "vue";

// This part can be removed after upgrade to Vue 3
import CompositionApi from "@vue/composition-api";
Vue.use(CompositionApi);

import { setupStore } from "@framework/core/Store";
import { setupRouter } from "@framework/core/Router";
import { loadConfiguration } from "@framework/core/Config";
import { setupInternationalization } from "@framework/core/Internationalization";
import { ObjectWithAnyKeys } from "@framework/interfaces/core/Helpers";
import AppComponent from "@framework/core/components/App.vue";

// Load styles
import "@framework/assets/styles/_core.scss";

function updatePageHead(config: ObjectWithAnyKeys) {
    const {
        title,
        description,
        keywords,
        faviconUrl,
        faviconType,
    } = config.app;
    document.title = title;

    document
        .querySelector("meta[name='description']")
        ?.setAttribute("content", description);

    document
        .querySelector("meta[name='keywords']")
        ?.setAttribute("content", keywords);

    document
        .querySelector("link[rel='icon']")
        ?.setAttribute("href", faviconUrl);

    document
        .querySelector("link[rel='icon']")
        ?.setAttribute("type", faviconType);
}

async function renderApp(config: ObjectWithAnyKeys) {
    new Vue({
        el: "#app",
        i18n: await setupInternationalization(config),
        router: setupRouter(config),
        store: setupStore(config),
        render: h => h(AppComponent)
    });
}

export function startApplication(config: ObjectWithAnyKeys) {
    updatePageHead(config);
    renderApp(config);
}

export { loadConfiguration };

