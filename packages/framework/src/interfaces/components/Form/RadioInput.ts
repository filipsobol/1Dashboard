import { Rules } from "@framework/interfaces/core/Validation";

export interface RadioInput {
    type: "RadioInput";
    props: RadioInputProps;
}

export interface RadioInputProps {
    id: string;
    name: string;
    readonly?: boolean;
    options: Array<SelectOption>;
    rules?: Rules;
    value?: string;
}

export interface SelectOption {
    value: string;
    label?: string;
}
