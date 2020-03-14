export interface RadioInput {
    type: "radioInput";
    props: RadioInputProps;
}

export interface RadioInputProps {
    name: string;
    options: Array<SelectOption>;
    value?: string;
    required?: boolean;
    readonly?: boolean;
}

export interface SelectOption {
    value: string;
    label?: string;
}
