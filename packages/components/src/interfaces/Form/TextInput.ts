import { InputProps } from "@/components/src/interfaces/Form/Input";

export interface TextInput {
    type: "TextInput";
    props: TextInputProps;
}

export interface TextInputProps extends InputProps {
    value?: string;
}
