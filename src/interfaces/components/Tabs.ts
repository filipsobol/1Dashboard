import { Component, ComponentProps } from "@/interfaces/core/Components";

export interface Tabs {
    type: "Tabs";
    props: TabsProps;
}

export type TabsProps = ComponentProps<Props>;

interface Props {
    tabs: Array<Tab>;
}

export interface Tab {
    id: string;
    title: string;
    components: Array<Component>;
}
