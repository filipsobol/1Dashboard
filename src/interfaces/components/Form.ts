import { FormComponent } from "@/interfaces/core/Components";

export interface Form {
    type: "form";
    props: FormProps;
}

export interface FormProps {
    components: Array<FormComponent>;
}
