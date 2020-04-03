import { Rules } from "@/interfaces/core/Validation";

export interface TextareaInput {
    type: "TextareaInput";
    props: TextareaInputProps;
}

export interface TextareaInputProps {
    id: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    readonly?: boolean;
    rows?: number;
    rules?: Rules;
    value?: string;
}
