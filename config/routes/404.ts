import { Page, PageUrl } from "@/interfaces/core/Config";

const config: Page = {
    url: PageUrl.NotFound,
    name: "404",
    title: "404 - Page not found",
    props: {
        hideBreadcrumbs: true
    },
    layout: ({ router }) => ({
        type: "Grid",
        props: {
            components: [
                {
                    type: "Article",
                    props: {
                        body: "Page you are looking for doesn't exists. Click on a button below to go back to homepage."
                    },
                    tile: {
                        style: "content"
                    }
                },
                {
                    type: "Button",
                    props: {
                        text: "Go back to homepage"
                    },
                    events: [
                        {
                            on: "click",
                            callback: () => router.push({ path: "/" }),
                        }
                    ],
                    tile: {
                        style: "content"
                    }
                }
            ]
        }
    })
};

export default config;
