interface Article {
    id: string;
    title: string;
    image: string;
}

interface ArticleCardProps {
    article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <a href={`/article/${article.id}`}>
            <div className="article-card flex flex-col gap-2.5">
                <img src={article.image} alt={article.title} className="h-[245.33px]"/>
                <h3 className="font-serif text-md">{article.title}</h3>
            </div>
        </a>
    );
}