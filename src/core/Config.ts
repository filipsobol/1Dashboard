import Axios from "axios";
import AppConfig from "@/../config/app";

export async function setup(store: any) {
    updateDocumentHead();

    store.commit("config/update", {
        name: "app",
        value: AppConfig,
    });

    const template = AppConfig.templateUrl
        ? (await Axios.get(AppConfig.templateUrl)).data
        : (await import(/* webpackChunkName: "template" */ "@/../config/template")).default;

    store.commit("config/update", {
        name: "template",
        value: template,
    });
}

function updateDocumentHead(): void {
    const {
        title,
        description,
        keywords,
        faviconUrl,
        faviconType,
        templateUrl,
    } = AppConfig;
    document.title = title;

    document
        .querySelector("meta[name=\"description\"]")
        ?.setAttribute("content", description);

    document
        .querySelector("meta[name=\"keywords\"]")
        ?.setAttribute("content", keywords);

    document
        .querySelector("link[rel=\"icon\"]")
        ?.setAttribute("href", faviconUrl);

    document
        .querySelector("link[rel=\"icon\"]")
        ?.setAttribute("type", faviconType);

    if (templateUrl) {
        // fetch template from URL
    } else {
        // load template as a file
    }
}
