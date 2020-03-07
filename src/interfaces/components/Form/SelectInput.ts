import { Input } from "@/interfaces/components/Form/Input";

export interface SelectInput extends Input {
    options: Array<SelectOption>;
    value?: string;
}

interface SelectOption {
    value: string;
    label?: string;
}