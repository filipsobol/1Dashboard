import { GridTileStyle } from "@/interfaces/core/Config";
import { Component } from "@/interfaces/core/Components";

export interface Grid {
    type: "Grid",
    props: GridProps;
}

export interface GridProps {
    components: Array<ComponentInGrid>;
}

export type ComponentInGrid = Component & {
    tile?: {
        layout?: {
            sm?: TileElement;
            md?: TileElement;
            lg?: TileElement;
            xl?: TileElement;
        };
        style?: string | GridTileStyle;
        title?: string;
        description?: string;
    };
}

interface TileElement {
    width?: number;
    height?: number;
    offsetStart?: number;
    offsetEnd?: number;
}
