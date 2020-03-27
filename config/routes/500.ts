import { Page, PageUrl } from "@/interfaces/core/Config";

const config: Page = {
    url: PageUrl.InternalError,
    name: "500",
    title: "500 - Internal Error",
    props: {
        hideBreadcrumbs: true
    },
    layout: {
        type: "Grid",
        props: {
            components: [
                {
                    type: "Article",
                    props: {
                        body: "An error occurred trying to load the page. Please try refreshing this page. If it persists, please report it to your system administrator."
                    },
                    tile: {
                        style: "grid"
                    }
                }
            ]
        }
    }
};

export default config;
