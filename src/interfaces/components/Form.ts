import { FormComponent } from "@/interfaces/core/Components";
import { ObjectWithAnyKeys } from "@/interfaces/core/Helpers";

export interface Form {
    type: "Form";
    props: FormProps;
    events?: Array<FormEvent>;
}

export interface FormProps {
    buttons?: {
        position?: FormButtonPosition;
        submit?: boolean;
        reset?: boolean;
    };
    components: Array<FormComponent>;
}

export type FormEvent = FormSubmitEvent;

export interface FormSubmitEvent {
    on: "submit";
    callback: (context: FormSubmitEventContext) => Promise<void>;
}

export interface FormSubmitEventContext {
    formData: FormData;
    jsonData: ObjectWithAnyKeys;
}

export enum FormButtonPosition {
    Start = "start",
    Center = "center",
    End = "end",
}
