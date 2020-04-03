import { InputProps } from "@/interfaces/components/Form/Input";

export interface NumberInput {
    type: "NumberInput";
    props: NumberInputProps;
}

export interface NumberInputProps extends InputProps {
    value?: number;
    step?: number;
    min?: number;
    max?: number;
}
