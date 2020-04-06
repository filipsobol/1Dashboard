import { loadConfiguration, startApplication } from "@framework/core/App";

const configuration = loadConfiguration();

// Register optional plugins here

startApplication(configuration);
