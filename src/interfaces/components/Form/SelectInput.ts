import { InputProps } from "@/interfaces/components/Form/Input";

export interface SelectInput {
    type: "SelectInput";
    props: SelectInputProps;
}

export interface SelectInputProps extends InputProps {
    id: string;
    options: Array<SelectOption>;
    value?: string;
}

interface SelectOption {
    value: string;
    label?: string;
}
