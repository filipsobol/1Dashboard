import { InputProps } from "@framework/interfaces/components/Form/Input";

export interface TextInput {
    type: "TextInput";
    props: TextInputProps;
}

export interface TextInputProps extends InputProps {
    value?: string;
}
