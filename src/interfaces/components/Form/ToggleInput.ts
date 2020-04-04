import { Rules } from "@/interfaces/core/Validation";

export interface ToggleInput {
    type: "ToggleInput";
    props: ToggleInputProps;
}

export interface ToggleInputProps {
    id: string;
    name: string;
    label: string;
    readonly?: boolean;
    rules?: Rules;
    value?: boolean;
}
