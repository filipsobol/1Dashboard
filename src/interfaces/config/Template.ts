export interface Template {
    pages: Array<Page>;
    settings?: any;
}

interface Page {
    url: string;
    name: string;
    title: string;
    component: Component;
}

interface Component {
    type: string;
    props: object;
}
