import { Component, ComponentTypes } from "@/interfaces/core/Components";

export interface Tabs {
    type: "tabs";
    props: {
        tabs: Array<Tab>;
    };
}

export interface Tab {
    id: string;
    title: string;
    components: Array<Component<ComponentTypes>>;
}
