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
    component: Component;
    props?: PageProps;
}

export interface PageProps {
    hideBreadcrumbs?: boolean;
}

export interface ErrorPages {
    notFound: Page;
}

export interface Component {
    type: string;
    props?: object;
    tile?: Tile;
}

export interface Tile {
    layout?: TileLayout;
    style?: TileStyle;
    title?: string;
    description?: string;
}

export interface TileLayout {
    sm?: TileElement;
    md?: TileElement;
    lg?: TileElement;
    xl?: TileElement;
}

export interface TileElement {
    width?: number;
    height?: number;
    offsetStart?: number;
    offsetEnd?: number;
}

export interface TileStyle {
    background?: string;
    padding?: number;
    shadow?: string;
    rounded?: string;
}
