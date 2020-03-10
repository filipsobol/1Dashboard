export interface CheckboxInput {
    name: string;
    options: Array<SelectOption>;
    value?: Array<string> | boolean;
    required?: boolean;
    readonly?: boolean;
}

export interface SelectOption {
    value: string;
    label?: string;
}