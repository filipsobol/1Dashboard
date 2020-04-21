import { Page, PageUrl } from "@framework/interfaces/core/Config";
import { Component } from "@framework/interfaces/core/Components";

const page: Page = {
    url: PageUrl.Login,
    name: "Login",
    title: "Login",
    beforeEnter: (context): any => {
        if (context.user) {
            context.router.push({ path: "/" });
        }
    },
    component: async (context): Promise<Component> => ({
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
                                    buttons:  {
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
                                    ]
                                },
                                events: [
                                    {
                                        on: "submit",
                                        callback: async ({ jsonData }) => {
                                            await context.firebase.auth().signInWithEmailAndPassword(
                                                jsonData.email,
                                                jsonData.password
                                            );

                                            await context.router.push({ path: context.route.query?.route.toString() || "/" });
                                        },
                                    }
                                ]
                            }
                        ]
                    },
                    tile: {
                        style: "grid",
                    }
                },
            ]
        }
    }),
};

export default page;
