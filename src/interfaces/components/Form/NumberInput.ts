import { Input } from "@/interfaces/components/Form/Input";

export interface NumberInput extends Input {
    value?: number;
    step?: number;
    min?: number;
    max?: number;
}
