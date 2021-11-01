import FeaturedVideo from './FeaturedVideo/FeaturedVideo'
import FourPieceVideos from './FourPieceVideos/FourPieceVideos'
import RightSideVideos from './RightSideVideos/RightSideVideos'

import { useFetchVideos } from 'hooks/videos/useFetchVideos'
import Spinner from 'components/Spinner/Spinner'

import './videosBundle.scss'

const VideosBundle = () => {
    const { status: statusVideo, data: videosData } = useFetchVideos()

    return statusVideo === 'loading' ? (
        <Spinner />
    ) : (
        <div className="video-bundle-container">
            <div className="video-bundle-left-side">
                <FeaturedVideo payload={videosData.payload[0]} />
                <FourPieceVideos payload={videosData.payload[0]} />
            </div>
            <div className="video-bundle-right-side">
                <RightSideVideos payload={videosData.payload[1]} />
            </div>
        </div>
    )
}

export default VideosBundle
