import { InputProps } from "@/interfaces/components/Form/Input";
import { ComponentProps } from "@/interfaces/core/Components";

export interface SelectInput {
    type: "SelectInput";
    props: SelectInputProps;
}

export type SelectInputProps = ComponentProps<Props>;

interface Props extends InputProps {
    id: string;
    options: Array<SelectOption>;
    value?: string;
}

interface SelectOption {
    value: string;
    label?: string;
}
