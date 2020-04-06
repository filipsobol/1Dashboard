import { Rules } from "@framework/interfaces/core/Validation";

export interface FileInput {
    type: "FileInput";
    props: FileInputProps;
}

export interface FileInputProps {
    id: string;
    name: string;
    placeholder?: string;
    readonly?: boolean;
    rules?: Rules;
    value?: string;
}
