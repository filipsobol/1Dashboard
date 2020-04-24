import { Page } from "@framework/interfaces/core/Config";
import { Component } from "@framework/interfaces/core/Components";

const page: Page = {
    url: "/",
    name: "Homepage",
    title: "Welcome to 1Dashboard",
    content: async (context): Promise<Component> => ({
        type: "Grid",
        props: {
            components: [
                {
                    type: "Article",
                    props: {
                        body: "To change author of this article you can add following query to the end of the URL: ?author=Your Name",
                        author: context.route.query?.author as string || "Default author",
                    },
                    tile: {
                        layout: {
                            sm: {
                                width: 12,
                            },
                            lg: {
                                width: 6,
                            }
                        },
                        style: "grid",
                        title: "Component with dynamic data",
                        description: "This component uses dynamic data from URL parameters."
                    }
                },
                {
                    type: "Article",
                    props: await context.resource("get", "https://www.mocky.io/v2/5e7cf1643500002a9806a02d?mocky-delay=1500ms"),
                    tile: {
                        layout: {
                            sm: {
                                width: 12,
                            },
                            lg: {
                                width: 6,
                            }
                        },
                        style: "grid",
                        title: "Optional tile title",
                    }
                }
            ]
        }
    })
};

export default page;
