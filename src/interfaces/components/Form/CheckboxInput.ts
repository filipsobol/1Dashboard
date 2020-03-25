export interface CheckboxInput {
    type: "CheckboxInput";
    props: CheckboxInputProps;
}

export interface CheckboxInputProps {
    id: string;
    name: string;
    options: Array<SelectOption>;
    value?: CheckboxValue;
    readonly?: boolean;
}

export type CheckboxValue = Array<string> | boolean;

export interface SelectOption {
    value?: string;
    label?: string;
    required?: boolean;
}
