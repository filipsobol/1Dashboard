import { Rules } from "@framework/interfaces/core/Validation";

export interface TextareaInput {
    type: "TextareaInput";
    props: TextareaInputProps;
}

export interface TextareaInputProps {
    id: string;
    name: string;
    placeholder?: string;
    readonly?: boolean;
    rows?: number;
    rules?: Rules;
    value?: string;
}
