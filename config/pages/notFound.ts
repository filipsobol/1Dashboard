import { Page } from "@/interfaces/core/Config";

const config: Page = {
    url: "/404",
    name: "404",
    title: "404 - Page not found",
    props: {
        hideBreadcrumbs: true
    },
    component: {
        type: "Grid",
        props: {
            components: [
                {
                    type: "Article",
                    props: {
                        body: "Page you are looking for doesn't exists. Click on a button below to go back to homepage."
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
