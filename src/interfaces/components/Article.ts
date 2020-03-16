export interface Article {
    type: "Article";
    props: ArticleProps;
}

export interface ArticleProps {
    title?: string;
    body: string;
    author?: string;
    createdAt?: string;
}
