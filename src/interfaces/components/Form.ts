import { FormComponent, ComponentProps } from "@/interfaces/core/Components";

export interface Form {
    type: "Form";
    props: FormProps;
}

export type FormProps = ComponentProps<Props>;

interface Props {
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
