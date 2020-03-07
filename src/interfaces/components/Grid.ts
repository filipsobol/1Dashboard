import { Component, ComponentTypes } from "@/interfaces/core/Components";

export interface Grid {
    components: Array<ComponentInGrid<ComponentTypes>>;
}

export interface ComponentInGrid<T extends ComponentTypes> extends Component<T> {
    tile?: {
        layout?: {
            sm?: TileElement;
            md?: TileElement;
            lg?: TileElement;
            xl?: TileElement;
        };
        style?: {
            background?: string;
            padding?: number;
            shadow?: string;
            rounded?: string;
        };
        title?: string;
        description?: string;
    };
}

export interface TileElement {
    width?: number;
    height?: number;
    offsetStart?: number;
    offsetEnd?: number;
}
