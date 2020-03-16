export interface ToggleInput {
    type: "ToggleInput",
    props: ToggleInputProps;
}

export interface ToggleInputProps {
    id: string;
    name: string;
    label: string;
    value?: boolean;
    required?: boolean;
    readonly?: boolean;
}
