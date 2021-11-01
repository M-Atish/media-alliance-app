import './fourPieceVideos.scss'
import SingleLeftVideo from './SingleLeftVideo/SingleLeftVideo'

const FourPieceVideos = ({ payload }) => {
    return (
        <div className="four-piece-video-container">
            <SingleLeftVideo
                urlLink={payload?.url ? payload.url : null}
                title={payload?.title ? payload.title : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                date={
                    payload.updated_at &&
                    new Date(payload?.updated_at ? payload.updated_at : null)
                }
            />
            <SingleLeftVideo
                urlLink={payload?.url ? payload.url : null}
                title={payload?.title ? payload.title : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                date={
                    payload.updated_at &&
                    new Date(payload?.updated_at ? payload.updated_at : null)
                }
            />
            <SingleLeftVideo
                urlLink={payload?.url ? payload.url : null}
                title={payload?.title ? payload.title : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                date={
                    payload.updated_at &&
                    new Date(payload?.updated_at ? payload.updated_at : null)
                }
            />
            <SingleLeftVideo
                urlLink={payload?.url ? payload.url : null}
                title={payload?.title ? payload.title : null}
                image={payload?.image?.imageUrl ? payload.image.imageUrl : null}
                date={
                    payload.updated_at &&
                    new Date(payload?.updated_at ? payload.updated_at : null)
                }
            />
        </div>
    )
}

export default FourPieceVideos
