export interface TextareaInput {
    type: "textareaInput";
    props: TextareaInputProps;
}

export interface TextareaInputProps {
    name: string;
    placeholder: string;
    required?: boolean;
    readonly?: boolean;
    value?: string;
    rows?: number;
}
