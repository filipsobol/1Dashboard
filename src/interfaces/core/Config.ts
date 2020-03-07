import { Component, ComponentTypes } from "@/interfaces/core/Components";

export interface App {
    url: string;
    title: string;
    description: string;
    keywords: string;
    faviconUrl: string;
    faviconType: string;
    timezone: string;
    locale: string;
    fallbackLocale: string;
    debug: boolean;
    pages: Array<Page>;
    errorPages: ErrorPages;
    defaultPageUrl?: string;
    locales?: object; // TODO
}

export interface Page {
    url: string;
    name: string;
    title?: string;
    component: Component<keyof ComponentTypes>;
    props?: PageProps;
}

export interface PageProps {
    hideBreadcrumbs?: boolean;
}

export interface ErrorPages {
    notFound: Page;
}
