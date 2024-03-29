import { Rules } from "@framework/interfaces/core/Validation";

export interface MultiSelectInput  {
    type: "MultiSelectInput";
    props: MultiSelectInputProps;
}

export interface MultiSelectInputProps {
    id: string;
    name: string;
    readonly?: boolean;
    options: Array<MultiSelectOption>;
    rules?: Rules;
    value?: Array<string>;
}

export interface MultiSelectOption {
    value: string;
    label?: string;
}
