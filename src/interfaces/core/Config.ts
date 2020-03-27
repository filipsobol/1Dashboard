import { Route } from "vue-router";
import { AxiosRequestConfig } from "axios";
import { Component } from "@/interfaces/core/Components";
import { Radius, Shadow } from "@/interfaces/core/Styles";

export interface App {
    debug: boolean;
    url: string;
    title: string;
    description: string;
    keywords: string;
    faviconUrl: string;
    faviconType: string;
    defaultPageUrl: string;
}

export interface Localization {
    timezone: string;
    locale: string;
    fallbackLocale: string;
    locales?: object;
}

export interface Page {
    url?: string;
    name: string;
    title?: string;
    layout: Component | {
        (context: PageLayoutContext): Component | Promise<Component>
    };
    props?: {
        hideBreadcrumbs?: boolean;
    };
}

export interface PageLayoutContext {
    route: Route
    get(url: string, config?: AxiosRequestConfig): Promise<any>;
    post(url: string, config?: AxiosRequestConfig): Promise<any>;
    put(url: string, config?: AxiosRequestConfig): Promise<any>;
    patch(url: string, config?: AxiosRequestConfig): Promise<any>;
    delete(url: string, config?: AxiosRequestConfig): Promise<any>;
}

export interface Styles {
    tile: {
        predefinedStyles: {
            [styleName: string]: GridTileStyle;
        };
    };
}

export interface GridTileStyle {
    background?: string;
    padding?: number;
    shadow?: Shadow;
    radius?: Radius;
}
