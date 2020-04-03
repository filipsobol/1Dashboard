import { Rules } from "@/interfaces/core/Validation";

export interface MultiSelectInput  {
    type: "MultiSelectInput";
    props: MultiSelectInputProps;
}

export interface MultiSelectInputProps {
    id: string;
    name: string;
    required?: boolean;
    readonly?: boolean;
    options: Array<MultiSelectOption>;
    rules?: Rules;
    value?: Array<string>;
}

export interface MultiSelectOption {
    value: string;
    label?: string;
}
