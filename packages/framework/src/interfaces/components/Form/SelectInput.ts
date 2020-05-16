import { InputProps } from "@framework/interfaces/components/Form/Input";

export interface SelectInput {
    type: "SelectInput";
    props: SelectInputProps;
    events?: Array<SelectInputEvent>;
}

export interface SelectInputProps extends InputProps {
    value?: string;
    searchable?: boolean;
    options: Array<SelectOption>;
}

export interface SelectOption {
    value: string;
    label: string;
}

export type SelectInputEvent = SelectInputSelectionEvent;

export interface SelectInputSelectionEvent {
    on: "select";
    callback: (context: SelectOption) => any;
}
