import { ComponentProps } from "@/interfaces/core/Components";

export interface ToggleInput {
    type: "ToggleInput",
    props: ToggleInputProps;
}

export type ToggleInputProps = ComponentProps<Props>;

interface Props {
    id: string;
    name: string;
    label: string;
    value?: boolean;
    required?: boolean;
    readonly?: boolean;
}
