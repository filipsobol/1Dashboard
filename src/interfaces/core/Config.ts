export interface App {
    url: string;
    title: string;
    description: string;
    keywords: string;
    defaultPageUrl?: string;
    faviconUrl: string;
    faviconType: string;
    pagesUrl?: string;
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
    props: object;
}
