import { InputProps } from "@/interfaces/components/Form/Input";

export interface TextInput {
    type: "textInput";
    props: TextInputProps;
}

export interface TextInputProps extends InputProps {
    value?: string;
}
