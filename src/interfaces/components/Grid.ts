import { Component, ComponentType } from "@/interfaces/core/Components";

export interface Grid {
    components: Array<ComponentInGrid<ComponentType>>;
}

export interface ComponentInGrid<T extends ComponentType> extends Component<T> {
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
