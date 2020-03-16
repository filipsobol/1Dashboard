import { FormComponent } from "@/interfaces/core/Components";

export interface Form {
    type: "Form";
    props: FormProps;
}

export interface FormProps {
    buttons?: {
        position?: FormButtonPosition;
        submit?: boolean;
        reset?: boolean;
    };
    components: Array<FormComponent>;
}

export enum FormButtonPosition {
    Start = "start",
    Center = "center",
    End = "end",
}
