// Load core services
import { setup as setupStore } from "./core/Store";
import { setup as setupConfig } from "./core/Config";
import { setup as setupRenderer } from "@/core/Renderer";

// Load styles
import "@/assets/styles/_core.scss";

// Setup application
(async () => {
    const store = setupStore();
    await setupConfig(store);
    setupRenderer(store);
})();
