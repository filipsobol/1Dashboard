import { loadConfiguration, startApplication } from "@framework/core/App";
import { registerComponentsGlobally } from "@framework/core/Components";

const configuration = loadConfiguration();

// Register optional plugins here

registerComponentsGlobally();
startApplication(configuration);
