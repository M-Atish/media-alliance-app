import Carousel from 'utils/carousel/Carousel'
import { useFetchNews } from 'hooks/news/useFetchNews'
import Spinner from 'components/Spinner/Spinner'

const FeaturedNews = (props) => {
    const { status: statusNews, data: newsData } = useFetchNews()

    return (
        <Carousel itemsNumber={1}>
            {/* TODO: Needs reworking. Make the left featured news section of the dashboard. */}
            {/* {statusNews === 'loading' ? (
                <Spinner />
            ) : (
                <div>
                    {newsData?.payload
                        ? newsData.payload.map((data, index) => (
                              <div key={index} className="">{data}</div>
                          ))
                        : null}
                </div>
            )} */}
        </Carousel>
    )
}

export default FeaturedNews
