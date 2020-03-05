export interface App {
    url: string;
    title: string;
    description: string;
    keywords: string;
    defaultPageUrl?: string;
    faviconUrl: string;
    faviconType: string;
    pages: Array<Page>;
    timezone: string;
    locale: string;
    fallbackLocale: string;
    localeUrl?: string;
    debug: boolean;
}


export interface Page {
    url: string;
    name: string;
    title: string;
    component: Component;
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
