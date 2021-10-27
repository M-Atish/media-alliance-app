import { useFetchNews } from 'hooks/news/useFetchNews'
import Spinner from 'components/Spinner/Spinner'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsArticleBundle = () => {
    const { status: statusNews, data: newsData } = useFetchNews()

    return statusNews === 'loading' ? (
        <div className="spinner">
            <Spinner />
        </div>
    ) : Array.isArray(newsData?.payload) && newsData?.payload.length > 0 ? (
        newsData.payload.map((article) => (
            <NewsArticle
                id={article.id}
                key={article.id}
                newsAgency={article.channel_name}
                newsAgencyIcon={article.channel_icon}
                title={article.title}
                content={article.description}
                tags={article?.tags ? article.tags : null}
                date={article.updated_at}
                image={article?.image ? article.image : null}
                newsLink={article.link}
            />
        ))
    ) : null
}

export default NewsArticleBundle
