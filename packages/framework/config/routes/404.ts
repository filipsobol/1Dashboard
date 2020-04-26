import { Page, PageUrl } from "@framework/interfaces/core/Config";
import { Grid } from "@framework/interfaces/components/Grid";
import { BorderRadius, Justify, Shadow } from "@framework/interfaces/core/Styles";

const config: Page = {
    url: PageUrl.NotFound,
    name: "404",
    title: "404 - Page not found",
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
                        body: "The page you are looking for does not exist. Click the button below to return to the homepage."
                    },
                    tile: {
                        style: {
                            justify: Justify.CENTER,
                            background: "transparent",
                            padding: 4,
                            shadow: Shadow.NONE,
                            border: {
                                radius: BorderRadius.NEUTRAL,
                            }
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
                            callback: () => context.router.push({ path: "/" }),
                        }
                    ],
                    tile: {
                        style: {
                            justify: Justify.CENTER,
                            background: "transparent",
                            padding: 0,
                            shadow: Shadow.NONE,
                            border: {
                                radius: BorderRadius.NEUTRAL,
                            }
                        }
                    }
                }
            ]
        }
    })
};

export default config;
