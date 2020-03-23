import { ComponentProps } from "@/interfaces/core/Components";

export interface FileInput {
    type: "FileInput";
    props: FileInputProps;
}

export type FileInputProps = ComponentProps<Props>;

export interface Props {
    id: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    readonly?: boolean;
    value?: string;
}
