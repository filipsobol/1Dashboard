export interface FileInput {
    type: "FileInput";
    props: FileInputProps;
}

export interface FileInputProps {
    id: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    readonly?: boolean;
    value?: string;
}
