import { Page, PageUrl } from "@framework/interfaces/core/Config";
import { Grid } from "@/components/src/interfaces/Grid";
import { Justify, Radius, Shadow } from "@framework/interfaces/core/Styles";

const config: Page = {
    url: PageUrl.NotFound,
    name: "404",
    title: "404 - Page not found",
    props: {
        hideBreadcrumbs: true
    },
    layout: ({ router }): Grid => ({
        type: "Grid",
        props: {
            components: [
                {
                    type: "Article",
                    props: {
                        body: "The page you are looking for does not exist. Click the button below to return to the homepage."
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
        }
    })
};

export default config;
