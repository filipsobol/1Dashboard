import AppConfig from "@/../config/app";

export async function setup(store: any) {
    updateDocumentHead();

    store.commit("update", {
        name: "app",
        value: AppConfig,
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
