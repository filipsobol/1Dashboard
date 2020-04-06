import Vue from "vue";

// This part can be removed after upgrade to Vue 3
import CompositionApi from "@vue/composition-api";
Vue.use(CompositionApi);

// Load core services
import { setup as setupStore } from "@framework/core/Store";
import { setup as setupRouter } from "@framework/core/Router";
import { setup as setupConfiguration } from "@framework/core/Config";
import { setup as setupComponents } from "@framework/core/Components";
import { setup as setupInternationalization } from "@framework/core/Internationalization";
import AppComponent from "@framework/core/components/App.vue";

// Load styles
import "@framework/assets/styles/_core.scss";

// Setup application
(async () => {
    setupComponents();

    const store = setupStore();
    setupConfiguration(store);

    new Vue({
        el: "#app",
        store,
        router: setupRouter(store),
        i18n: await setupInternationalization(store),
        render: h => h(AppComponent)
    });
})();
