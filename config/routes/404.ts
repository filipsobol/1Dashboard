import { Page, PageUrl } from "@/interfaces/core/Config";
import { Justify, Radius, Shadow } from "@/interfaces/core/Styles";

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
                    type: "Grid",
                    props: {
                        components: [
                            {
                                type: "Article",
                                props: {
                                    body: "Page you are looking for doesn't exists. Click on a button below to go back to homepage."
                                },
                                tile: {
                                    style: {
                                        justify: Justify.CENTER,
                                        background: "transparent",
                                        padding: 4,
                                        shadow: Shadow.NONE,
                                        radius: Radius.NEUTRAL,
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "link",
                                    text: "Go back to homepage"
                                },
                                events: [
                                    {
                                        on: "click",
                                        callback: () => router.push({ path: "/" }),
                                    }
                                ],
                                tile: {
                                    style: {
                                        justify: Justify.CENTER,
                                        background: "transparent",
                                        padding: 0,
                                        shadow: Shadow.NONE,
                                        radius: Radius.NEUTRAL,
                                    }
                                }
                            }
                        ]
                    },
                    tile: {
                        style: {
                            justify: Justify.CENTER,
                            padding: 8,
                            background: "white",
                            shadow: Shadow.NEUTRAL,
                            radius: Radius.NEUTRAL,
                        }
                    }
                }
            ]
        }
    })
};

export default config;
