import { Page } from "../../src/interfaces/core/Config";

const page: Page = {
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
};

export default page;
