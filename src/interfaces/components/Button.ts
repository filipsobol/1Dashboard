export interface Button {
    type: "button";
    props: ButtonProps;
}

export interface ButtonProps {
    type?: "submit" | "reset" | "button";
    text: string;
}
