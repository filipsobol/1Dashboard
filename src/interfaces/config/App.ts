export interface App {
    url: string;
    title: string;
    description: string;
    keywords: string;
    defaultPageUrl?: string;
    faviconUrl: string;
    faviconType: string;
    templateUrl?: string;
    timezone: string;
    locale: string;
    fallbackLocale: string;
    localeUrl?: string;
    debug: boolean;
}
