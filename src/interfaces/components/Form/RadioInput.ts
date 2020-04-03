import { Rules } from "@/interfaces/core/Validation";

export interface RadioInput {
    type: "RadioInput";
    props: RadioInputProps;
}

export interface RadioInputProps {
    id: string;
    name: string;
    required?: boolean;
    readonly?: boolean;
    options: Array<SelectOption>;
    rules?: Rules;
    value?: string;
}

export interface SelectOption {
    value: string;
    label?: string;
}
