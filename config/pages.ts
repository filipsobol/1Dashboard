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
        url: "/users",
        name: "Users",
        title: "Users",
        component: {
            type: "article",
            props: {
                title: "This is users page",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh velit, gravida nec lobortis ut, pretium eu libero. Phasellus id leo tempor, tincidunt mauris sed, finibus sem.",
                author: "Filip Sobol",
                createdAt: "29-02-2020"
            }
        }
    }
];

export default config;
