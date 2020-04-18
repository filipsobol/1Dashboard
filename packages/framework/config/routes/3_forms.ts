import { Page } from "@framework/interfaces/core/Config";
import { Grid } from "@framework/interfaces/components/Grid";

const page: Page = {
    url: "/form",
    name: "Forms",
    title: "Form inputs",
    layout: (context): Grid => ({
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
                                                name: "Text",
                                                placeholder: "Input placeholder",
                                                rules: {
                                                    required: true,
                                                },
                                            }
                                        },
                                        {
                                            type: "NumberInput",
                                            props: {
                                                id: "transferAmount",
                                                name: "Number",
                                                placeholder: "Input placeholder",
                                                rules: {
                                                    required: true,
                                                    numeric: true,
                                                    between: [1, 5]
                                                }
                                            }
                                        },
                                        {
                                            type: "SelectInput",
                                            props: {
                                                id: "currencySelect",
                                                name: "Select",
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
                                                rules: {
                                                    required: true,
                                                },
                                            }
                                        },
                                        {
                                            type: "MultiSelectInput",
                                            props: {
                                                id: "currencyMultiSelect",
                                                name: "Select",
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
                                                rules: {
                                                    required: true,
                                                },
                                            }
                                        },
                                        {
                                            type: "RadioInput",
                                            props: {
                                                id: "currencyRadio",
                                                name: "Radio",
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
                                                rules: {
                                                    required: true,
                                                },
                                            }
                                        },
                                        {
                                            type: "CheckboxInput",
                                            props: {
                                                id: "currencyCheckbox",
                                                name: "Checkbox",
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
                                                rules: {
                                                    required: true,
                                                },
                                            }
                                        },
                                        {
                                            type: "ToggleInput",
                                            props: {
                                                id: "terms",
                                                name: "Toggle",
                                                label: "I agree to the Terms of Service",
                                                rules: {
                                                    required: true,
                                                },
                                            }
                                        },
                                        {
                                            type: "TextareaInput",
                                            props: {
                                                id: "bio",
                                                name: "Textarea",
                                                placeholder: "Input placeholder",
                                                rules: {
                                                    required: true,
                                                },
                                            }
                                        },
                                        {
                                            type: "FileInput",
                                            props: {
                                                id: "profileImage",
                                                name: "File",
                                                placeholder: "Click to browse or drag a file",
                                                rules: {
                                                    required: true,
                                                    image: true,
                                                },
                                            }
                                        },
                                    ]
                                },
                                events: [
                                    {
                                        on: "submit",
                                        callback: ({ formData }) => context.resource(
                                            "post",
                                            "https://httpbin.org/post",
                                            { data: formData, headers: { "Content-Type": "multipart/form-data" } }
                                        ),
                                    }
                                ]
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
                                                rules: {
                                                    required: true,
                                                    string: true,
                                                    url: true
                                                }
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
                                                rules: {
                                                    required: true,
                                                }
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
                                                rules: {
                                                    required: true,
                                                    string: true,
                                                    url: true,
                                                    includes: "github.com"
                                                }
                                            }
                                        }
                                    ]
                                },
                                events: [
                                    {
                                        on: "submit",
                                        callback: ({ jsonData }) => context.resource(
                                            "post",
                                            "https://httpbin.org/post",
                                            { data: jsonData }
                                        ),
                                    }
                                ]
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
    })
};

export default page;
