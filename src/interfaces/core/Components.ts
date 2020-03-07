import { Article } from "@/interfaces/components/Article";
import { Button } from "@/interfaces/components/Button";
import { Grid } from "@/interfaces/components/Grid";
import { Input } from "@/interfaces/components/Input";
import { Tabs } from "@/interfaces/components/Tabs";
import { Text } from "@/interfaces/components/Text";

export interface Component<T extends ComponentTypes> {
    type: T;
    props: ComponentsProps[T];
}

export type ComponentTypes = keyof ComponentsProps;

type ComponentsProps = {
    "article": Article;
    "button": Button;
    "grid": Grid;
    "input": Input;
    "tabs": Tabs;
    "text": Text;
};
