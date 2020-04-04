import Vue from "vue";

// This part can be removed after upgrade to Vue 3
import CompositionApi from "@vue/composition-api";
Vue.use(CompositionApi);

// Load core services
import { setup as setupStore } from "@/core/Store";
import { setup as setupRouter } from "@/core/Router";
import { setup as setupConfiguration } from "@/core/Config";
import { setup as setupComponents } from "@/core/Components";
import { setup as setupInternationalization } from "@/core/Internationalization";
import AppComponent from "@/core/components/App.vue";

// Load styles
import "@/assets/styles/_core.scss";

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
