import { Component } from "@/interfaces/core/Components";

export interface Tabs {
    type: "tabs";
    props: TabsProps;
}

export interface TabsProps {
    tabs: Array<Tab>;
}

export interface Tab {
    id: string;
    title: string;
    components: Array<Component>;
}
