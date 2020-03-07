export interface Input {
    type: string;
    name: string;
    placeholder: string;
    value?: string | number;
    step?: number;
    min?: number;
    max?: number;
    prependText?: string;
    appendText?: string;
    prependIcon?: string;
    appendIcon?: string;
}
