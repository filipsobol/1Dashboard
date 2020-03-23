import { ComponentProps } from "@/interfaces/core/Components";

export interface Article {
    type: "Article";
    props: ArticleProps;
}

export type ArticleProps = ComponentProps<Props>;

interface Props {
    title?: string;
    body: string;
    author?: string;
    createdAt?: string;
}
