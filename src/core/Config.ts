import Axios from "axios";
import AppConfig from "@/../config/app";

export async function setup(store: any) {
    updateDocumentHead();
    await updateStore(store);
}

function updateDocumentHead(): void {
    const {
        title,
        description,
        keywords,
        faviconUrl,
        faviconType,
    } = AppConfig;
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

async function updateStore(store: any) {
    // Add application configuration
    store.commit("config/update", {
        name: "app",
        value: AppConfig,
    });

    // Add pages configuration
    const pages = AppConfig.pagesUrl
        ? (await Axios.get(AppConfig.pagesUrl)).data
        : (await import(/* webpackChunkName: "template" */ "@/../config/pages")).default;

    store.commit("config/update", {
        name: "pages",
        value: pages,
    });
}
