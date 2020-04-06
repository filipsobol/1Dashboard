export interface Button {
    type: "Button";
    props: ButtonProps;
    events?: Array<ButtonEvent>;
}

export interface ButtonProps {
    type?: ButtonType;
    disabled?: boolean;
    text?: string;
    icon?: string;
}

export type ButtonEvent = ButtonClickEvent;

export interface ButtonClickEvent {
    on: "click";
    callback: () => any;
}

export enum ButtonType {
    Button = "button",
    Submit = "submit",
    Reset = "reset",
}
