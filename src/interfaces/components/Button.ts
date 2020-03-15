export interface Button {
    type: "button";
    props: ButtonProps;
}

export interface ButtonProps {
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
