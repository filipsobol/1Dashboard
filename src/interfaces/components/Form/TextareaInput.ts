export interface TextareaInput {
    type: "TextareaInput";
    props: TextareaInputProps;
}

export interface TextareaInputProps {
    id: string;
    name: string;
    placeholder: string;
    required?: boolean;
    readonly?: boolean;
    value?: string;
    rows?: number;
}
