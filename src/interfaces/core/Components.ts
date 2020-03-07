import { Article } from "@/interfaces/components/Article";
import { Button } from "@/interfaces/components/Button";
import { Grid } from "@/interfaces/components/Grid";
import { Tabs } from "@/interfaces/components/Tabs";
import { Text } from "@/interfaces/components/Text";
import { NumberInput } from "@/interfaces/components/Form/NumberInput";
import { PasswordInput } from "@/interfaces/components/Form/PasswordInput";
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
    "numberInput": NumberInput;
    "passwordInput": PasswordInput;
    "textInput": TextInput;
};
