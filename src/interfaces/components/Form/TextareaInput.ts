import { ComponentProps } from "@/interfaces/core/Components";

export interface TextareaInput {
    type: "TextareaInput";
    props: TextareaInputProps;
}

export type TextareaInputProps = ComponentProps<Props>;

interface Props {
    id: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    readonly?: boolean;
    value?: string;
    rows?: number;
}
