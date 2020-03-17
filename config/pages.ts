import { Page } from "@/interfaces/core/Config";

const config: Array<Page> = [
    {
        url: "/home",
        name: "Homepage",
        title: "Welcome to 1Dashboard",
        component: {
            type: "Grid",
            props: {
                components: [
                    {
                        type: "Article",
                        props: {
                            title: "This is users page",
                            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh velit, gravida nec lobortis ut, pretium eu libero. Phasellus id leo tempor, tincidunt mauris sed, finibus sem.",
                            author: "Filip Sobol",
                            createdAt: "29-02-2020"
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
                            title: "Optional tile title",
                            description: "Optional tile description"
                        }
                    },
                    {
                        type: "Article",
                        props: {
                            title: "This is users page",
                            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh velit, gravida nec lobortis ut, pretium eu libero. Phasellus id leo tempor, tincidunt mauris sed, finibus sem.",
                            author: "Filip Sobol",
                            createdAt: "29-02-2020"
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
                            title: "Optional tile title",
                        }
                    },
                    {
                        type: "Article",
                        props: {
                            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh velit, gravida nec lobortis ut, pretium eu libero. Phasellus id leo tempor, tincidunt mauris sed, finibus sem.",
                            author: "Filip Sobol"
                        },
                        tile: {
                            style: "grid",
                            title: "This can also be used as article title",
                            description: "29-02-2020"
                        }
                    },
                    {
                        type: "Article",
                        props: {
                            title: "This is users page",
                            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh velit, gravida nec lobortis ut, pretium eu libero. Phasellus id leo tempor, tincidunt mauris sed, finibus sem.",
                            author: "Filip Sobol",
                            createdAt: "29-02-2020"
                        },
                        tile: {
                            style: "grid",
                        }
                    }
                ]
            }
        }
    },
    {
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
    },
    {
        url: "/form",
        name: "Forms",
        title: "Form inputs",
        component: {
            type: "Grid",
            props: {
                components: [
                    {
                        type: "Grid",
                        props: {
                            components: [
                                {
                                    type: "Form",
                                    props: {
                                        components: [
                                            {
                                                type: "TextInput",
                                                props: {
                                                    id: "name",
                                                    name: "Input name",
                                                    placeholder: "Input placeholder",
                                                }
                                            },
                                            {
                                                type: "SelectInput",
                                                props: {
                                                    id: "currencySelect",
                                                    name: "Currency",
                                                    placeholder: "Select a currency",
                                                    options: [
                                                        {
                                                            value: "eur",
                                                            label: "Euro",
                                                        },
                                                        {
                                                            value: "usd",
                                                            label: "US Dollar",
                                                        },
                                                        {
                                                            value: "pln",
                                                            label: "Polish zloty",
                                                        }
                                                    ],
                                                }
                                            },
                                            {
                                                type: "RadioInput",
                                                props: {
                                                    id: "currencyRadio",
                                                    name: "Currency",
                                                    options: [
                                                        {
                                                            value: "eur",
                                                            label: "Euro",
                                                        },
                                                        {
                                                            value: "usd",
                                                            label: "US Dollar",
                                                        },
                                                        {
                                                            value: "pln",
                                                            label: "Polish zloty",
                                                        }
                                                    ],
                                                }
                                            },
                                            {
                                                type: "CheckboxInput",
                                                props: {
                                                    id: "currencyCheckbox",
                                                    name: "Currency",
                                                    options: [
                                                        {
                                                            value: "eur",
                                                            label: "Euro",
                                                        },
                                                        {
                                                            value: "usd",
                                                            label: "US Dollar",
                                                        },
                                                        {
                                                            value: "pln",
                                                            label: "Polish zloty",
                                                        }
                                                    ],
                                                }
                                            },
                                            {
                                                type: "TextareaInput",
                                                props: {
                                                    id: "bio",
                                                    name: "Bio",
                                                    placeholder: "Tell us something about yourself",
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        tile: {
                            style: "grid",
                            title: "Basic input types",
                            description: "These are simple inputs with minimal configuration.",
                        }
                    },
                    {
                        type: "Grid",
                        props: {
                            components: [
                                {
                                    type: "Form",
                                    props: {
                                        components: [
                                            {
                                                type: "TextInput",
                                                props: {
                                                    id: "url",
                                                    name: "Website address",
                                                    placeholder: "Enter your website address",
                                                    prependText: "https://",
                                                }
                                            },
                                            {
                                                type: "PasswordInput",
                                                props: {
                                                    id: "password",
                                                    name: "Password",
                                                    placeholder: "Enter your password",
                                                    prependIcon: "lock",
                                                    displayRevealButton: true,
                                                }
                                            },
                                            {
                                                type: "TextInput",
                                                props: {
                                                    id: "ghProfile",
                                                    name: "GitHub Profile",
                                                    placeholder: "Enter your GitHub profie name",
                                                    prependText: "https://github.com/",
                                                    prependIcon: "github",
                                                }
                                            },
                                            {
                                                type: "NumberInput",
                                                props: {
                                                    id: "transferAmount",
                                                    name: "Transfer amount",
                                                    placeholder: "Enter transfer amount",
                                                    step: 0.01,
                                                    prependIcon: "dollar-sign",
                                                    appendText: "Charged at the beginning of the month",
                                                    appendIcon: "info",
                                                }
                                            },
                                            {
                                                type: "FileInput",
                                                props: {
                                                    id: "profileImage",
                                                    name: "Profile image",
                                                    placeholder: "Browse or drag your profile image"
                                                }
                                            },
                                            {
                                                type: "ToggleInput",
                                                props: {
                                                    id: "terms",
                                                    name: "Terms of Service",
                                                    label: "I agree to the Terms of Service"
                                                }
                                            },
                                        ]
                                    }
                                }
                            ]
                        },
                        tile: {
                            style: "grid",
                            title: "Inputs with text and icon label",
                            description: "Inputs can have labels on both sides to hint what user is expected to enter. It's possible to combine text and icon labels."
                        }
                    },
                ]
            }
        }
    },
];

export default config;
