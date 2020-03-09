export interface RadioInput {
    name: string;
    options: Array<SelectOption>;
    value?: string;
    required?: boolean;
    readonly?: boolean;
}

interface SelectOption {
    value: string;
    label?: string;
}
