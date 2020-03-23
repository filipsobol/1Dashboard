import { ComponentProps } from "@/interfaces/core/Components";

export interface Button {
    type: "Button";
    props: ButtonProps;
}

export type ButtonProps = ComponentProps<Props>;

interface Props {
    type?: ButtonType;
    disabled?: boolean;
    text?: string;
    icon?: string;
}

export enum ButtonType {
    Button = "button",
    Submit = "submit",
    Reset = "reset",
}
