import { Rules } from "@framework/interfaces/core/Validation";

export interface InputProps {
    id: string;
    name: string;
    placeholder: string;
    readonly?: boolean;
    rules?: Rules;
    prependText?: string;
    appendText?: string;
    prependIcon?: string;
    appendIcon?: string;
}
