import { Page, PageUrl } from "@framework/interfaces/core/Config";

const page: Page = {
    url: PageUrl.Logout,
    name: "Logout",
    title: "Logout",
    beforeEnter: async (context): Promise<any> => {
        if (context.user) {
            await context.firebase.auth().signOut();
        }

        return context.router.push({ path: "/" });
    },
    layout: "AuthLayout",
    content: {
        type: "Grid",
        props: {
            components: []
        }
    },
};

export default page;
