import { Page } from "@/interfaces/core/Config";

const config: Page = {
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
                        body: "There was an error when trying to display this page."
                    },
                    tile: {
                        style: "grid"
                    }
                },
                {
                    type: "Button",
                    props: {
                        text: "Go back to homepage"
                    },
                    tile: {
                        style: "content"
                    }
                }
            ]
        }
    }
};

export default config;
