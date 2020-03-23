import { ComponentProps } from "@/interfaces/core/Components";

export interface RadioInput {
    type: "RadioInput";
    props: RadioInputProps;
}

export type RadioInputProps = ComponentProps<Props>;

interface Props {
    id: string;
    name: string;
    options: Array<SelectOption>;
    value?: string;
    required?: boolean;
    readonly?: boolean;
}

export interface SelectOption {
    value: string;
    label?: string;
}
