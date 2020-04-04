import { Rules } from "@/interfaces/core/Validation";

export interface CheckboxInput {
    type: "CheckboxInput";
    props: CheckboxInputProps;
}

export interface CheckboxInputProps {
    id: string;
    name: string;
    readonly?: boolean;
    options: Array<SelectOption>;
    rules?: Rules;
    value?: CheckboxValue;
}

export type CheckboxValue = Array<string> | boolean;

export interface SelectOption {
    value?: string;
    label?: string;
}
