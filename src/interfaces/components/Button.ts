export interface Button {
    type: "Button";
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
