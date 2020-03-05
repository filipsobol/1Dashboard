import { Page } from "@/interfaces/core/Config";

const config: Page = {
    url: "/404",
    name: "404",
    title: "404 - Page not found",
    props: {
        hideBreadcrumbs: true
    },
    component: {
        type: "grid",
        props: {
            components: [
                {
                    type: "article",
                    props: {
                        body: "Page you are looking for doesn't exists. Click on a button below to go back to homepage."
                    },
                    tile: {
                        style: {
                            background: "transparent",
                            shadow: "none",
                            padding: "0",
                        }
                    }
                },
                {
                    type: "button",
                    props: {
                        text: "Go back to homepage"
                    },
                    tile: {
                        style: {
                            background: "transparent",
                            shadow: "none",
                            padding: "0",
                        }
                    }
                }
            ]
        }
    }
};

export default config;
