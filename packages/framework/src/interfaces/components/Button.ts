export interface Button {
    type: "Button";
    props: ButtonProps;
    events?: Array<ButtonEvent>;
}

export interface ButtonProps {
    type?: ButtonType;
    style?: ButtonStyle;
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

export enum ButtonStyle {
    Gray = "btn-gray",
    Red = "btn-red",
    Orange = "btn-orange",
    Yellow = "btn-yellow",
    Blue = "btn-blue",
    Indigo = "btn-indigo",
    Purple = "btn-purple",
    Pink = "btn-pink",
    Light = "btn-light",
    Dark = "btn-dark",
}
