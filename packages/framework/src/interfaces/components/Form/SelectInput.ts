import { InputProps } from "@framework/interfaces/components/Form/Input";

export interface SelectInput {
    type: "SelectInput";
    props: SelectInputProps;
}

export interface SelectInputProps extends InputProps {
    value?: string;
    options: Array<SelectOption>;
}

interface SelectOption {
    value: string;
    label?: string;
}
