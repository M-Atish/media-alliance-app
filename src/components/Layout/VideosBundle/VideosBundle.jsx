import FeaturedVideo from './FeaturedVideo/FeaturedVideo'
import FourPieceVideos from './FourPieceVideos/FourPieceVideos'
import RightSideVideos from './RightSideVideos/RightSideVideos'

import { useFetchVideos } from 'hooks/videos/useFetchVideos'
import Spinner from 'components/Spinner/Spinner'

const VideosBundle = () => {
    const { status: statusVideo, data: videosData } = useFetchVideos()

    console.log(videosData)

    return statusVideo === 'loading' ? (
        <Spinner />
    ) : (
        <FeaturedVideo payload={videosData.payload[0]} />
    )
}

export default VideosBundle
