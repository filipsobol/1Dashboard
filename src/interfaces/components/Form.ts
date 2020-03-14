import { FormComponent } from "@/interfaces/core/Components";

export interface Form {
    type: "form";
    props: FormProps;
}

export interface FormProps {
    buttons?: {
        position?: "start" | "center" | "end";
        submit?: boolean;
        reset?: boolean;
    };
    components: Array<FormComponent>;
}
