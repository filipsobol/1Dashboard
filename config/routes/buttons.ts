import { Page } from "@/interfaces/core/Config";

const page: Page = {
    url: "/buttons",
    name: "Buttons",
    title: "Buttons",
    component: {
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
                        style: "grid",
                        title: "Disabled buttons with text and/or icon",
                        description: "These buttons are disabled. User cannot click on them to perform actions.",
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
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "twitter",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "instagram",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "linkedin",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "twitch",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "github",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "gitlab",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "codepen",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "codesandbox",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "trello",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "slack",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                            {
                                type: "Button",
                                props: {
                                    icon: "figma",
                                },
                                tile: {
                                    layout: {
                                        sm: {
                                            width: 1
                                        }
                                    }
                                }
                            },
                        ]
                    },
                    tile: {
                        style: "grid",
                        title: "Buttons with icons",
                        description: "Buttons with icons of social networks and popular development tools."
                    }
                }
            ]
        }
    }
};

export default page;
