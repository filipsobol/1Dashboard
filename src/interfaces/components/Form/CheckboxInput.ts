import { ComponentProps } from "@/interfaces/core/Components";

export interface CheckboxInput {
    type: "CheckboxInput";
    props: CheckboxInputProps;
}

export type CheckboxInputProps = ComponentProps<Props>;

interface Props {
    id: string;
    name: string;
    options: Array<SelectOption>;
    value?: CheckboxValue;
    readonly?: boolean;
}

export type CheckboxValue = Array<string> | boolean;

export interface SelectOption {
    value?: string;
    label?: string;
    required?: boolean;
}
