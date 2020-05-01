import { ButtonProps } from "@framework/interfaces/components/Button";

export interface Dropdown {
    type: "Dropdown";
    props: DropdownProps;
}

export interface DropdownProps {
    button: ButtonProps;
    items: Array<DropdownItem>;
    xPosition?: DropdownXPosition;
    yPosition?: DropdownYPosition;
}

export enum DropdownXPosition {
    Top = "top",
    Bottom = "bottom",
}

export enum DropdownYPosition {
    Left = "left",
    Right = "right",
}

export interface DropdownItem {
    icon: string;
    text: string;
    url: string;
}
