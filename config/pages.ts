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
                                                    name: "Input name",
                                                    placeholder: "Input placeholder",
                                                }
                                            },
                                            {
                                                type: "selectInput",
                                                props: {
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
                                                    value: "eur"
                                                }
                                            },
                                            {
                                                type: "checkboxInput",
                                                props: {
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
                                                    value: ["eur"]
                                                }
                                            },
                                            {
                                                type: "textareaInput",
                                                props: {
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
                                                    name: "Website address",
                                                    placeholder: "Enter your website address",
                                                    prependText: "https://",
                                                }
                                            },
                                            {
                                                type: "passwordInput",
                                                props: {
                                                    name: "Password",
                                                    placeholder: "Enter your password",
                                                    prependIcon: "lock",
                                                    displayRevealButton: true,
                                                }
                                            },
                                            {
                                                type: "textInput",
                                                props: {
                                                    name: "GitHub Profile",
                                                    placeholder: "Enter your GitHub profie name",
                                                    value: "filipsobol",
                                                    prependText: "https://github.com/",
                                                    prependIcon: "github",
                                                }
                                            },
                                            {
                                                type: "numberInput",
                                                props: {
                                                    name: "Transfer amount",
                                                    placeholder: "Enter transfer amount",
                                                    value: 4.20,
                                                    step: 0.01,
                                                    prependText: "$",
                                                    appendText: "Charged automatically at the beginning of every month",
                                                    appendIcon: "info",
                                                }
                                            }
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
    }
];

export default config;
