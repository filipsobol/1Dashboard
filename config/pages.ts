import { Page } from "@/interfaces/core/Config";

const config: Array<Page> = [
    {
        url: "/home",
        name: "Homepage",
        title: "Welcome to 1Dashboard",
        component: {
            type: "grid",
            props: {
                components: [
                    {
                        type: "article",
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
                        type: "article",
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
                        type: "article",
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
                        type: "article",
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
            type: "grid",
            props: {
                components: [
                    {
                        type: "grid",
                        props: {
                            components: [
                                {
                                    type: "button",
                                    props: {
                                        text: "Submit",
                                    }
                                },
                                {
                                    type: "button",
                                    props: {
                                        text: "Submit",
                                        icon: "send",
                                    },
                                },
                                {
                                    type: "button",
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
                        type: "grid",
                        props: {
                            components: [
                                {
                                    type: "button",
                                    props: {
                                        text: "Submit",
                                        disabled: true,
                                    }
                                },
                                {
                                    type: "button",
                                    props: {
                                        text: "Submit",
                                        icon: "send",
                                        disabled: true,
                                    },
                                },
                                {
                                    type: "button",
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
            type: "grid",
            props: {
                components: [
                    {
                        type: "grid",
                        props: {
                            components: [
                                {
                                    type: "form",
                                    props: {
                                        components: [
                                            {
                                                type: "textInput",
                                                props: {
                                                    id: "name",
                                                    name: "Input name",
                                                    placeholder: "Input placeholder",
                                                }
                                            },
                                            {
                                                type: "selectInput",
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
                                                type: "radioInput",
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
                                                type: "checkboxInput",
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
                                                type: "textareaInput",
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
                        type: "grid",
                        props: {
                            components: [
                                {
                                    type: "form",
                                    props: {
                                        components: [
                                            {
                                                type: "textInput",
                                                props: {
                                                    id: "url",
                                                    name: "Website address",
                                                    placeholder: "Enter your website address",
                                                    prependText: "https://",
                                                }
                                            },
                                            {
                                                type: "passwordInput",
                                                props: {
                                                    id: "password",
                                                    name: "Password",
                                                    placeholder: "Enter your password",
                                                    prependIcon: "lock",
                                                    displayRevealButton: true,
                                                }
                                            },
                                            {
                                                type: "textInput",
                                                props: {
                                                    id: "ghProfile",
                                                    name: "GitHub Profile",
                                                    placeholder: "Enter your GitHub profie name",
                                                    prependText: "https://github.com/",
                                                    prependIcon: "github",
                                                }
                                            },
                                            {
                                                type: "numberInput",
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
                                                type: "checkboxInput",
                                                props: {
                                                    id: "terms",
                                                    name: "Currency",
                                                    options: [
                                                        {
                                                            label: "I agree to the Terms of Service",
                                                            required: true,
                                                        }
                                                    ],
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
