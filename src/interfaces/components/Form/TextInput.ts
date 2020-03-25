import { InputProps } from "@/interfaces/components/Form/Input";

export interface TextInput {
    type: "TextInput";
    props: TextInputProps;
}

export interface TextInputProps extends InputProps {
    id: string;
    value?: string;
}
