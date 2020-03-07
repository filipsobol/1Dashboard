import { Article } from "@/interfaces/components/Article";
import { Button } from "@/interfaces/components/Button";
import { Grid } from "@/interfaces/components/Grid";
import { Input } from "@/interfaces/components/Input";
import { Tabs } from "@/interfaces/components/Tabs";
import { Text } from "@/interfaces/components/Text";

export interface Component<T extends ComponentType> {
    type: T;
    props: ComponentTypes[T];
}

export type ComponentTypes = {
    "article": Article;
    "button": Button;
    "grid": Grid;
    "input": Input;
    "tabs": Tabs;
    "text": Text;
};

type ComponentType = keyof ComponentTypes;

type ComponentProps = ComponentTypes[keyof ComponentTypes];
