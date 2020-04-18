import VueRouter, { Route, RouterMode } from "vue-router";
import { AxiosRequestConfig, Method } from "axios";
import { Component } from "@framework/interfaces/core/Components";
import { ObjectWithAnyKeys } from "@framework/interfaces/core/Helpers";
import { Direction, Justify, Radius, Shadow } from "@framework/interfaces/core/Styles";

export interface Context extends ObjectWithAnyKeys {
    configuration: AppConfiguration;
    route: Route;
    router: VueRouter;
    resource: (method: Method, url: string, config?: AxiosRequestConfig) => Promise<any>;
    currentPage?: Page;
}

export interface AppConfiguration extends ObjectWithAnyKeys {
    app: App;
    localization: Localization;
    resources: Resources;
    routing: Routing;
    styles: Styles;
    pages: Array<Page>;
}

export interface App extends ObjectWithAnyKeys {
    debug: boolean;
    url: string;
    title: string;
    description: string;
    keywords: string;
    faviconUrl: string;
    faviconType: string;
    defaultPageUrl: string;
}

export interface Localization extends ObjectWithAnyKeys {
    timezone: string;
    locale: string;
    fallbackLocale: string;
    silentTranslationWarn: boolean;
}

export interface Resources extends AxiosRequestConfig, ObjectWithAnyKeys {}

export interface Routing extends ObjectWithAnyKeys {
    mode: RouterMode;
    onReady: Array<Function>;
    beforeEach: Array<Function>;
    afterEach: Array<Function>;
}

export interface Page {
    url: string | PageUrl;
    name: string;
    title?: string;
    layout: PageLayout;
    props?: {
        hideBreadcrumbs?: boolean;
    };
    beforeEnter?: Function;
    beforeLeave?: Function;
}

export type PageLayout = Component | {
    (context: Context): Component | Promise<Component>;
};

export enum PageUrl {
    Login = "/auth/login",
    Register = "/auth/register",
    NotFound = "/error/404",
    InternalError = "/error/500",
}

export interface Styles extends ObjectWithAnyKeys {
    tile: {
        predefinedStyles: {
            [styleName: string]: GridTileStyle;
        };
    };
}

export interface GridTileStyle {
    direction?: Direction;
    justify?: Justify;
    background?: string;
    padding?: number;
    shadow?: Shadow;
    radius?: Radius;
}
