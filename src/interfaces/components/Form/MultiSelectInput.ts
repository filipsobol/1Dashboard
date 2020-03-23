import { ComponentProps } from "@/interfaces/core/Components";

export interface MultiSelectInput  {
    type: "MultiSelectInput";
    props: MultiSelectInputProps;
}

export type MultiSelectInputProps = ComponentProps<Props>;

interface Props {
    id: string;
    name: string;
    required?: boolean;
    readonly?: boolean;
    options: Array<MultiSelectOption>;
    value?: Array<string>;
}

export interface MultiSelectOption {
    value: string;
    label?: string;
}
