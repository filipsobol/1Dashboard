import { InputProps } from "@/interfaces/components/Form/Input";
import { ComponentProps } from "@/interfaces/core/Components";

export interface PasswordInput {
    type: "PasswordInput";
    props: PasswordInputProps;
}

export type PasswordInputProps = ComponentProps<Props>;

interface Props extends InputProps {
    id: string;
    value?: string;
    displayRevealButton?: boolean;
}
