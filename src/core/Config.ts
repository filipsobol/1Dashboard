import AppConfig from "@/../config/app";
import LocalizationConfig from "@/../config/localization";
import StylesConfig from "@/../config/styles";

export function setup(store: any) {
    store.commit("update", {
        name: "app",
        value: AppConfig,
    });

    store.commit("update", {
        name: "localization",
        value: LocalizationConfig,
    });

    store.commit("update", {
        name: "styles",
        value: StylesConfig,
    });
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
