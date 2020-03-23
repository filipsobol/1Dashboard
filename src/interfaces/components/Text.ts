import { ComponentProps } from "@/interfaces/core/Components";

export interface Text {
    type: "Text";
    props: TextProps;
}

export type TextProps = ComponentProps<Props>;

interface Props {
    text: string;
}
