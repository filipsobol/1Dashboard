import { Page } from "@framework/interfaces/core/Config";

const page: Page = {
    url: "/buttons",
    name: "Buttons",
    description: " Button component examples",
    icon: "thumbs-up",
    title: "Buttons",
    content: {
        type: "Grid",
        props: {
            components: [
                {
                    type: "Grid",
                    props: {
                        components: [
                            {
                                type: "Button",
                                props: {
                                    text: "Submit",
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    text: "Submit",
                                    icon: "send",
                                },
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "send",
                                },
                            },
                        ]
                    },
                    tile: {
                        layout: {
                            md: {
                                width: 12,
                                height: 1,
                            },
                            lg: {
                                width: 6,
                                height: 1,
                            }
                        },
                        style: "grid",
                        title: "Buttons with text and icons",
                        description: "These are simple buttons with text, icon or both, depending on the configuration.",
                    }
                },
                {
                    type: "Grid",
                    props: {
                        components: [
                            {
                                type: "Button",
                                props: {
                                    icon: "facebook",
                                    text: "Sign in with Facebook"
                                },
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "twitter",
                                    text: "Sign in with Twitter"
                                },
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "instagram",
                                    text: "Sign in with Instagram"
                                },
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "linkedin",
                                    text: "Sign in with LinkedIn"
                                },
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "twitch",
                                    text: "Sign in with Twitch"
                                },
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "github",
                                    text: "Sign in with GitHub"
                                },
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "gitlab",
                                    text: "Sign in with GitLab"
                                },
                            }
                        ]
                    },
                    tile: {
                        layout: {
                            md: {
                                width: 12,
                                height: 2,
                            },
                            lg: {
                                width: 6,
                                height: 2,
                            }
                        },
                        style: "grid",
                        title: "Buttons with icons",
                        description: "Buttons with icons of social networks and popular development tools."
                    }
                },
                {
                    type: "Grid",
                    props: {
                        components: [
                            {
                                type: "Button",
                                props: {
                                    text: "Submit",
                                    disabled: true,
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    text: "Submit",
                                    icon: "send",
                                    disabled: true,
                                },
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "send",
                                    disabled: true,
                                },
                            },
                        ]
                    },
                    tile: {
                        layout: {
                            md: {
                                width: 12,
                                height: 1,
                            },
                            lg: {
                                width: 6,
                                height: 1,
                            }
                        },
                        style: "grid",
                        title: "Disabled buttons with text and/or icon",
                        description: "These buttons are disabled. User cannot click on them to perform actions.",
                    }
                },
            ]
        }
    }
};

export default page;
