import { InputProps } from "@/interfaces/components/Form/Input";
import { ComponentProps } from "@/interfaces/core/Components";

export interface NumberInput {
    type: "NumberInput";
    props: NumberInputProps;
}

export type NumberInputProps = ComponentProps<Props>;

interface Props extends InputProps {
    id: string;
    value?: number;
    step?: number;
    min?: number;
    max?: number;
}
