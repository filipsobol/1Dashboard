import { Article } from "@/interfaces/components/Article";
import { Button } from "@/interfaces/components/Button";
import { Grid } from "@/interfaces/components/Grid";
import { Tabs } from "@/interfaces/components/Tabs";
import { Text } from "@/interfaces/components/Text";
import { CheckboxInput } from "@/interfaces/components/Form/CheckboxInput";
import { NumberInput } from "@/interfaces/components/Form/NumberInput";
import { PasswordInput } from "@/interfaces/components/Form/PasswordInput";
import { RadioInput } from "@/interfaces/components/Form/RadioInput";
import { SelectInput } from "@/interfaces/components/Form/SelectInput";
import { TextareaInput } from "@/interfaces/components/Form/TextareaInput";
import { TextInput } from "@/interfaces/components/Form/TextInput";

export interface Component<T extends ComponentTypes> {
    type: T;
    props: ComponentsProps[T];
}

export type ComponentTypes = keyof ComponentsProps;

type ComponentsProps = {
    "article": Article;
    "button": Button;
    "grid": Grid;
    "tabs": Tabs;
    "text": Text;

    // Form
    "checkboxInput": CheckboxInput;
    "numberInput": NumberInput;
    "passwordInput": PasswordInput;
    "radioInput": RadioInput;
    "selectInput": SelectInput;
    "textareaInput": TextareaInput;
    "textInput": TextInput;
};
