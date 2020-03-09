import { Page } from "@/interfaces/core/Config";

const config: Array<Page> = [
    {
        url: "/home",
        name: "Homepage",
        title: "Welcome to 1Dashboard",
        component: {
            type: "article",
            props: {
                title: "This is a component created in the configuration",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh velit, gravida nec lobortis ut, pretium eu libero. Phasellus id leo tempor, tincidunt mauris sed, finibus sem.",
                author: "Filip Sobol",
                createdAt: "29-02-2020"
            }
        }
    },
    {
        url: "/grid",
        name: "Grid",
        title: "Grid",
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
                            layout: {
                                sm: {
                                    width: 12,
                                },
                                lg: {
                                    width: 6,
                                }
                            },
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
                            layout: {
                                sm: {
                                    width: 12,
                                },
                                lg: {
                                    width: 6,
                                }
                            }
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
                            }
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
                            }
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
                            }
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
                            }
                        }
                    },
                ]
            },
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
                                    type: "textInput",
                                    props: {
                                        name: "Input name",
                                        placeholder: "Input placeholder",
                                    },
                                    tile: {
                                        style: {
                                            background: "transparent",
                                            padding: 1,
                                            shadow: "0"
                                        }
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
                                    },
                                    tile: {
                                        style: {
                                            background: "transparent",
                                            padding: 1,
                                            shadow: "0"
                                        }
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
                                    },
                                    tile: {
                                        style: {
                                            background: "transparent",
                                            padding: 1,
                                            shadow: "0"
                                        }
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
                                    },
                                    tile: {
                                        style: {
                                            background: "transparent",
                                            padding: 1,
                                            shadow: "0"
                                        }
                                    }
                                },
                                {
                                    type: "textareaInput",
                                    props: {
                                        name: "Bio",
                                        placeholder: "Tell us something about yourself",
                                    },
                                    tile: {
                                        style: {
                                            background: "transparent",
                                            padding: 1,
                                            shadow: "0"
                                        }
                                    }
                                }
                            ]
                        },
                        tile: {
                            title: "Basic input types",
                            description: "These are simple inputs with minimal configuration.",
                        }
                    },

                    {
                        type: "textInput",
                        props: {
                            name: "Website address",
                            placeholder: "Enter your website address",
                            prependText: "https://",
                        },
                        tile: {
                            title: "Input with custom name, placeholder and leading label",
                            description: "Inputs can have labels on both sides to hint what user is expected to enter."
                        }
                    },
                    {
                        type: "passwordInput",
                        props: {
                            name: "Password",
                            placeholder: "Enter your password",
                            prependIcon: "lock",
                            displayRevealButton: true,
                        },
                        tile: {
                            title: "Input with leading icon label",
                            description: "Inputs can have icon labels which are good for common and obvious fields, eg. on login page."
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
                        },
                        tile: {
                            title: "Input with combined icon and text labels",
                            description: "Inputs can combine icon and text labels. Leading label will start with an icon, but trailing label will start with text."
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
                        },
                        tile: {
                            title: "Input with leading icon label and trailing text label",
                            description: "Inputs can also have trailing labels to show additional hints or information."
                        }
                    },
                ]
            }
        }
    }
];

export default config;
