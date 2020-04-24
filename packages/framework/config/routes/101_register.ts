import { Page, PageUrl } from "@framework/interfaces/core/Config";
import { Component } from "@framework/interfaces/core/Components";
import { Justify, Radius, Shadow } from "@framework/interfaces/core/Styles";

const page: Page = {
    url: PageUrl.Register,
    name: "Register",
    title: "Register",
    beforeEnter: (context): any => {
        if (context.user) {
            context.router.push({ path: "/" });
        }
    },
    layout: "AuthLayout",
    content: async (context): Promise<Component> => ({
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
                                    buttons: {
                                        reset: false,
                                    },
                                    components: [
                                        {
                                            type: "TextInput",
                                            props: {
                                                id: "email",
                                                name: "E-mail address",
                                                prependIcon: "user",
                                                placeholder: "Enter your e-mail address",
                                                rules: {
                                                    required: true,
                                                    email: true
                                                },
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
                                            type: "PasswordInput",
                                            props: {
                                                id: "password_confirmation",
                                                name: "Confirm Password",
                                                placeholder: "Confirm your password",
                                                prependIcon: "lock",
                                                displayRevealButton: true,
                                                rules: {
                                                    required: true,
                                                }
                                            }
                                        },
                                    ]
                                },
                                events: [
                                    {
                                        on: "submit",
                                        callback: async ({ jsonData }) => {
                                            await context.firebase.auth().createUserWithEmailAndPassword(
                                                jsonData.email,
                                                jsonData.password
                                            );

                                            await context.router.push({ path: "/" });
                                        },
                                    }
                                ]
                            }
                        ]
                    },
                    tile: {
                        style: {
                            background: "white",
                            padding: 8,
                            shadow: Shadow.LG,
                            radius: Radius.NEUTRAL,
                        },
                    }
                },
                {
                    type: "Button",
                    props: {
                        text: "Already have an account?"
                    },
                    events: [
                        {
                            on: "click",
                            callback: async () => await context.router.push({ path: "/auth/login" })
                        }
                    ],
                    tile: {
                        style: {
                            justify: Justify.CENTER
                        },
                    }
                },
            ]
        }
    })
};

export default page;
