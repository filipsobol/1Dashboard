export interface Article {
    type: "article";
    props: ArticleProps;
}

export interface ArticleProps {
    title?: string;
    body: string;
    author?: string;
    createdAt?: string;
}
