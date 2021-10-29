// import { useFetchNews } from 'hooks/news/useFetchNews'
import Spinner from 'components/Spinner/Spinner'
import NewsArticle from '../NewsArticle/NewsArticle'
import { useFetchNewsPaginate } from 'hooks/news/useFetchNewsPaginate'

const NewsArticleBundle = () => {
    const { status: statusNewsPaginate, data: newsDataPaginate } =
        useFetchNewsPaginate(3)

    // TODO: Make a fetch component which takes the popular/trending news on the news bundle and put it here

    return statusNewsPaginate === 'loading' ? (
        <div className="spinner">
            <Spinner />
        </div>
    ) : Array.isArray(newsDataPaginate?.payload) &&
      newsDataPaginate?.payload.length > 0 ? (
        newsDataPaginate.payload.map((article) => (
            <NewsArticle
                id={article.id}
                key={article.id}
                newsAgency={article.channel_name}
                newsAgencyIcon={article.channel_icon}
                title={article.title}
                content={article.description}
                tags={article?.tag ? article.tag : null}
                date={article.updated_at}
                image={article?.image ? article.image : null}
                newsLink={article.link}
            />
        ))
    ) : null
}

export default NewsArticleBundle
