import { GridTileStyle } from "@/interfaces/core/Config";
import { Component, ComponentProps } from "@/interfaces/core/Components";

export interface Grid {
    type: "Grid",
    props: GridProps;
}

export type GridProps = ComponentProps<Props>;

interface Props {
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
