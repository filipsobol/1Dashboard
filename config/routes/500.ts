import { Page, PageUrl } from "@/interfaces/core/Config";
import { Justify, Radius, Shadow } from "@/interfaces/core/Styles";

const config: Page = {
    url: PageUrl.InternalError,
    name: "500",
    title: "500 - Internal Error",
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
                                    body: "An error occurred trying to load this page. Please try refreshing this page. If it persists, please report it to your system administrator."
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
                                    icon: "refresh-cw",
                                    text: "Refresh the page"
                                },
                                events: [
                                    {
                                        on: "click",
                                        callback: () => router.go(0), // Refresh the page
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
                        ],
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
