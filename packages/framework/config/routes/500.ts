import { Page, PageUrl } from "@framework/interfaces/core/Config";
import { Grid } from "@framework/interfaces/components/Grid";
import { Justify, Radius, Shadow } from "@framework/interfaces/core/Styles";

const config: Page = {
    url: PageUrl.InternalError,
    name: "500",
    title: "500 - Internal Error",
    props: {
        hideBreadcrumbs: true
    },
    content: (context): Grid => ({
        type: "Grid",
        props: {
            components: [
                {
                    type: "Article",
                    props: {
                        body: "An error occurred while trying to load this page. If the problem persists after refreshing the page, please report it to your system administrator."
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
                            callback: () => context.router.go(0), // Refresh the page
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
        }
    })
};

export default config;
