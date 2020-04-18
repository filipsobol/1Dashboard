import { reactive } from "@vue/composition-api";
import { loadConfiguration } from "@framework/core/Configuration";
import { startApplication } from "@framework/core/App";
import { registerPlugin } from "@framework/core/Plugin";
import firebaseIntegration from "@1dashboard/firebase-integration";

(async () => {
    const context = reactive<any>({
        configuration: loadConfiguration(),
        route: null,
        router: null,
        resource: null,
        currentPage: null,
    });

    // Register optional plugins here
    await registerPlugin(firebaseIntegration, context);

    // Render the application
    await startApplication(context);
})();
