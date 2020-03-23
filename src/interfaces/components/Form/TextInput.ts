import { InputProps } from "@/interfaces/components/Form/Input";
import { ComponentProps } from "@/interfaces/core/Components";

export interface TextInput {
    type: "TextInput";
    props: TextInputProps;
}

export type TextInputProps = ComponentProps<Props>;

interface Props extends InputProps {
    id: string;
    value?: string;
}
